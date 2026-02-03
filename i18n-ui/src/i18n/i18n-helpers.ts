// i18n 辅助函数 - 用于在模板中直接获取翻译文本

import { DEFAULT_LOCALE } from './locales';
import { translations } from './translations';

/**
 * 简单的翻译辅助函数
 * 直接返回翻译字符串，不依赖于控制器
 * 
 * @param key - 翻译键（支持点号分隔的路径）
 * @param params - 可选的参数对象
 * @returns 翻译后的字符串
 */
export function t(key: string, params?: Record<string, string>): string {
  // 从 localStorage 读取当前语言
  const storageKey = 'openclaw-locale';
  const stored = localStorage.getItem(storageKey);
  const locale = (stored && (stored === 'en' || stored === 'zh')) ? stored : DEFAULT_LOCALE;
  
  // 获取对应语言的翻译
  const translationsMap = translations[locale];
  
  // 解析键路径
  const keys = key.split('.');
  let result: any = translationsMap;
  
  for (const k of keys) {
    result = result?.[k];
  }
  
  // 如果找不到翻译，返回键本身
  if (typeof result !== 'string') {
    console.warn(`Translation not found: ${key}`);
    return key;
  }
  
  // 参数替换
  if (params) {
    return result.replace(/\{(\w+)\}/g, (match, param) => params[param] || match);
  }
  
  return result;
}

/**
 * 获取当前语言
 */
export function getCurrentLocale(): string {
  const storageKey = 'openclaw-locale';
  const stored = localStorage.getItem(storageKey);
  return (stored && (stored === 'en' || stored === 'zh')) ? stored : DEFAULT_LOCALE;
}