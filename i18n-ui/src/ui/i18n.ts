import { saveSettings, loadSettings } from "./storage";

export type Locale = "en" | "zh";

const TRANSLATIONS: Record<Locale, Record<string, string>> = {
  en: {
    "gateway.access": "Gateway Access",
    "gateway.access.sub": "Where the dashboard connects and how it authenticates.",
    "gateway.url": "WebSocket URL",
    "gateway.token": "Gateway Token",
    "gateway.password": "Password (not stored)",
    "gateway.session": "Default Session Key",
    "gateway.connect": "Connect",
    "gateway.refresh": "Refresh",
    "snapshot.title": "Snapshot",
    "snapshot.sub": "Latest gateway handshake information.",
    "status.connected": "Connected",
    "status.disconnected": "Disconnected",
    "status.uptime": "Uptime",
    "status.tick": "Tick Interval",
    "status.last_refresh": "Last Channels Refresh",
  },
  zh: {
    "gateway.access": "网关访问",
    "gateway.access.sub": "控制台连接地址及认证方式。",
    "gateway.url": "WebSocket 地址",
    "gateway.token": "网关令牌 (Token)",
    "gateway.password": "密码 (仅本地使用)",
    "gateway.session": "默认会话密钥",
    "gateway.connect": "连接",
    "gateway.refresh": "刷新",
    "snapshot.title": "系统快照",
    "snapshot.sub": "最新的网关握手信息。",
    "status.connected": "已连接",
    "status.disconnected": "未连接",
    "status.uptime": "运行时间",
    "status.tick": "心跳间隔",
    "status.last_refresh": "上次频道刷新",
  },
};

let currentLocale: Locale = "en";

// Initialize from storage or browser preference
const settings = loadSettings();
if (settings.locale) {
  currentLocale = settings.locale as Locale;
} else if (typeof navigator !== "undefined" && navigator.language.startsWith("zh")) {
  currentLocale = "zh";
}

export function t(key: string): string {
  return TRANSLATIONS[currentLocale][key] ?? key;
}

export function setLocale(locale: Locale) {
  currentLocale = locale;
  const currentSettings = loadSettings();
  saveSettings({ ...currentSettings, locale });
  // Simple reload to apply changes (low-cost re-render strategy)
  window.location.reload();
}

export function getLocale(): Locale {
  return currentLocale;
}
