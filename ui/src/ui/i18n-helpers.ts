// i18n 辅助函数
import type { Translations } from '../i18n';

/**
 * 获取翻译后的标签页标题
 */
export function getTitleForTab(tab: string, t: Translations): string {
  const titles: Record<string, keyof Translations['nav']> = {
    overview: 'overview',
    channels: 'channels',
    instances: 'instances',
    sessions: 'sessions',
    cron: 'cron',
    skills: 'skills',
    nodes: 'nodes',
    chat: 'chat',
    config: 'config',
    debug: 'debug',
    logs: 'logs',
  };
  
  const key = titles[tab];
  return key ? t.nav[key] : tab;
}

/**
 * 获取翻译后的标签页副标题
 */
export function getSubtitleForTab(tab: string, t: Translations): string {
  const subtitles: Record<string, string> = {
    overview: t.overview.subtitle,
    channels: t.channels.subtitle,
    instances: 'Presence beacons from connected clients and nodes.',
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
