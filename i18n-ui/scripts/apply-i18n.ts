import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { translations } from '../src/i18n/translations';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const USAGE_FILE = path.join(__dirname, 'i18n-usage.json');

type KeyInfo = {
  key: string;
  namespace: string;
};

// ==========================================
// 1. Dictionary Preparation
// ==========================================

// Map "English String" -> List of Candidate Keys
const stringToKeysMap = new Map<string, KeyInfo[]>();

function flatten(obj: any, prefix = '') {
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    const namespace = fullKey.split('.')[0]; 

    if (typeof value === 'string') {
      const str = value.trim();
      if (str.length > 1) { 
        if (!stringToKeysMap.has(str)) {
          stringToKeysMap.set(str, []);
        }
        stringToKeysMap.get(str)!.push({ key: fullKey, namespace });
      }
    } else if (typeof value === 'object' && value !== null) {
      flatten(value, fullKey);
    }
  }
}

// Load English translations
flatten(translations.en);

// Sort by length desc to replace longest matches first
const sortedEnglishStrings = Array.from(stringToKeysMap.keys()).sort((a, b) => b.length - a.length);

// Define Context Heuristics (Fallback)
const CONTEXT_MAP: Record<string, string[]> = {
  'nodes.ts': ['nodesDetail', 'nodes'],
  'cron.ts': ['cronDetail', 'cron'],
  'sessions.ts': ['sessionsDetail', 'sessions'],
  'skills.ts': ['skillsDetail', 'skills'],
  'channels.ts': ['channelsDetail', 'channels'],
  'logs.ts': ['logsDetail', 'logs'],
  'debug.ts': ['debugDetail', 'debug'],
  'overview.ts': ['overview'],
  'instances.ts': ['instances'],
  'app-render.ts': ['topbar', 'nav'],
  'app-render.helpers.ts': ['topbar', 'nav'],
};

// ==========================================
// 2. Core Logic: Scan & Apply
// ==========================================

const targets = [
  path.resolve(__dirname, '../src/ui/views'),
  path.resolve(__dirname, '../src/ui/app-render.ts'),
  path.resolve(__dirname, '../src/ui/app-render.helpers.ts'),
];

// Memory: Filename -> Array of used keys
let usageMap: Record<string, string[]> = {};

function loadUsageMap() {
  if (fs.existsSync(USAGE_FILE)) {
    try {
      usageMap = JSON.parse(fs.readFileSync(USAGE_FILE, 'utf-8'));
      console.log(`🧠 Loaded usage memory for ${Object.keys(usageMap).length} files.`);
    } catch (e) {
      console.warn("⚠️  Failed to load usage map.");
    }
  }
}

function scanFile(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const filename = path.basename(filePath);
  
  // Find all t("key") or t('key')
  const regex = /\bt\s*\(\s*["']([\w.]+)["']\s*[,)]/g;
  let match;
  const usedKeys = new Set<string>();
  
  while ((match = regex.exec(content)) !== null) {
    usedKeys.add(match[1]);
  }

  if (usedKeys.size > 0) {
    usageMap[filename] = Array.from(usedKeys);
  }
}

function resolveBestKey(english: string, filename: string): string | null {
  const candidates = stringToKeysMap.get(english);
  if (!candidates) return null;

  if (candidates.length === 1) {
    return candidates[0].key;
  }

  // 1. Check Memory (Highest Priority)
  const fileMemory = usageMap[filename];
  if (fileMemory) {
    const memoryMatch = candidates.find(c => fileMemory.includes(c.key));
    if (memoryMatch) return memoryMatch.key;
  }

  // 2. Check Context Heuristics
  const preferredNamespaces = CONTEXT_MAP[filename] || [];
  for (const ns of preferredNamespaces) {
    const match = candidates.find(c => c.namespace === ns);
    if (match) return match.key;
  }

  // 3. Fallback to Common
  const commonMatch = candidates.find(c => c.namespace === 'common');
  if (commonMatch) return commonMatch.key;

  return null; // Ambiguous, skip
}

function applyFile(filePath: string) {
  const filename = path.basename(filePath);
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;
  let hasImport = content.includes('import { t } from "../../i18n"') || content.includes('import { t } from "../i18n"');

  for (const str of sortedEnglishStrings) {
    const key = resolveBestKey(str, filename);
    if (!key) continue;

    const escaped = str.replace(/[.*+?^${}()|[\\]/g, '\\$&');
    
    // Case 1: HTML Content >Text<
    const regexHtml = new RegExp(`>\s*${escaped}\s*<`, 'g');
    content = content.replace(regexHtml, `>\${t("${key}")}<`);

    // Case 2: Attributes
    const regexAttr = new RegExp(`(placeholder|title|label|aria-label)="${escaped}"`, 'g');
    content = content.replace(regexAttr, `$1="\${t("${key}")}"`);
  }

  // Inject Import
  if (content !== originalContent && !hasImport) {
    const depth = filePath.split('src/ui/')[1].split('/').length - 1;
    const importPath = "../".repeat(depth) + "i18n";
    content = `import { t } from "${importPath}";\n` + content;
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ Applied translations to: ${filename}`);
  }
}

function walk(dir: string, action: (file: string) => void) {
  if (!fs.existsSync(dir)) return;
  const stat = fs.statSync(dir);
  if (stat.isFile()) {
    if (dir.endsWith('.ts')) action(dir);
    return;
  }
  if (stat.isDirectory()) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      walk(path.join(dir, file), action);
    }
  }
}

// ==========================================
// 3. CLI Entry
// ==========================================

const isScanMode = process.argv.includes('--scan');

if (isScanMode) {
  console.log("🔍 Scanning for existing translations...");
  usageMap = {};
  targets.forEach(target => walk(target, scanFile));
  fs.writeFileSync(USAGE_FILE, JSON.stringify(usageMap, null, 2), 'utf-8');
  console.log(`💾 Saved usage memory to ${path.basename(USAGE_FILE)}`);
} else {
  console.log("🚀 Applying translations...");
  loadUsageMap();
  targets.forEach(target => walk(target, applyFile));
  console.log("✨ Done.");
}