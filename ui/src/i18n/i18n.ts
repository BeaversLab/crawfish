// i18n 核心模块
import { ReactiveController, ReactiveControllerHost } from 'lit';
import { translate, type Translations } from './translations';
import type { Locale } from './locales';
import { DEFAULT_LOCALE, LOCALES } from './locales';

// i18n 控制器
export class I18nController implements ReactiveController {
  private _locale: Locale;
  private readonly storageKey = 'openclaw-locale';

  constructor(private host: ReactiveControllerHost) {
    this._locale = this.loadLocale();
    this.host.addController(this);
  }

  private loadLocale(): Locale {
    // 从 localStorage 读取
    const stored = localStorage.getItem(this.storageKey);
    if (stored && stored in LOCALES) {
      return stored as Locale;
    }

    // 从浏览器语言检测
    const browserLang = navigator.language.split('-')[0] as Locale;
    if (browserLang in LOCALES) {
      return browserLang;
    }

    return DEFAULT_LOCALE;
  }

  get locale(): Locale {
    return this._locale;
  }

  set locale(value: Locale) {
    if (value in LOCALES && value !== this._locale) {
      this._locale = value;
      localStorage.setItem(this.storageKey, value);
      this.host.requestUpdate();
    }
  }

  get t(): Translations {
    return translate(this._locale);
  }

  getAllLocales() {
    return LOCALES;
  }
}

// i18n 指令（用于 Lit 模板）
export const t = (key: string, params?: Record<string, string>) => {
  return (host: ReactiveControllerHost & { i18n?: I18nController }) => {
    if (!host.i18n) {
      host.i18n = new I18nController(host);
    }
    const translations = host.i18n.t;
    const keys = key.split('.');
    let result: any = translations;
    for (const k of keys) {
      result = result?.[k];
    }
    
    if (typeof result !== 'string') {
      return key;
    }

    // 简单的参数替换
    if (params) {
      return result.replace(/\{(\w+)\}/g, (match, param) => params[param] || match);
    }

    return result;
  };
};

// 导出辅助函数
export function createI18n(host: ReactiveControllerHost) {
  return new I18nController(host);
}

export function useI18n(host: ReactiveControllerHost & { i18n?: I18nController }) {
  if (!host.i18n) {
    host.i18n = new I18nController(host);
  }
  return host.i18n;
}
