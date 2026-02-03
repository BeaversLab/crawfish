// i18n 模块导出
export { I18nController, t as tDirective, createI18n, useI18n } from './i18n';
export { translate, translations, type Translations } from './translations';
export { LOCALES, DEFAULT_LOCALE, type Locale, type LocaleConfig } from './locales';
export { t, getCurrentLocale } from './i18n-helpers';