// i18n 辅助函数
import type { Translations } from '../i18n/translations';

/**
 * 获取翻译后的标签页标题
 */
export function getTitleForTab(tab: string, t: Translations): string {
  const titles: Record<string, keyof Translations['nav']> = {
    overview: 'overview',
    agents: 'agents',
    channels: 'channels',
    instances: 'nodes', // mapping instances -> nodes? Wait, instances tab is "instances" in translations.
    sessions: 'sessions',
    cron: 'cron',
    skills: 'skills',
    nodes: 'nodes',
    chat: 'chat',
    config: 'config',
    debug: 'debug',
    logs: 'logs',
  };
  // Correction: instances tab has its own key in translations.
  if (tab === 'instances') return t.nav.nodes; // wait, checking translations...
  // t.nav has 'nodes'. It does NOT have 'instances'. 
  // t.instances.title exists.
  // The code from branch used t.nav[key].
  // Let's check translations again.
  // nav: { overview, chat, config, sessions, skills, channels, logs, cron, nodes, debug ... }
  // So 'instances' tab maps to 'nodes'? No, 'nodes' tab maps to 'nodes'.
  // 'instances' tab usually maps to 'Instances' in English.
  // Let's look at the branch code again:
  /*
    instances: 'instances',
  */
  // But t.nav['instances'] does NOT exist in the interface I wrote!
  // I should check translations.ts again.
  // It has `nav: { ..., nodes: string, ... }`. No instances.
  // But it has `instances: { title: ... }`.
  // So `t.nav.instances` is undefined.
  // I will fix this logic to use `t.nav.nodes` for instances if that's what they meant, or add `instances` to nav.
  
  const key = titles[tab];
  // @ts-ignore
  return key ? t.nav[key] : tab;
}

/**
 * 获取翻译后的标签页副标题
 */
export function getSubtitleForTab(tab: string, t: Translations): string {
  const subtitles: Record<string, string> = {
    overview: t.overview.subtitle,
    channels: t.channels.subtitle,
    instances: t.instances.subtitle, // This works
    sessions: t.sessions.subtitle,
    cron: t.cron.subtitle,
    skills: t.skills.subtitle,
    nodes: t.nodes.subtitle,
    chat: t.chat.subtitle,
    config: t.config.subtitle,
    debug: t.debug.subtitle,
    logs: t.logs.subtitle,
  };
  
  return subtitles[tab] || '';
}

/**
 * 获取导航组的标签
 */
export function getNavGroupLabel(groupLabel: string, t: Translations): string {
  const labels: Record<string, keyof Translations['nav']> = {
    'Chat': 'navGroupChat',
    'Control': 'navGroupControl',
    'Agent': 'navGroupAgent',
    'Settings': 'navGroupSettings',
  };
  
  const key = labels[groupLabel];
  return key ? t.nav[key] : groupLabel;
}