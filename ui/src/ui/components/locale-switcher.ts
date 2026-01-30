import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { createI18n, type Locale } from '../i18n';

@customElement('locale-switcher')
export class LocaleSwitcher extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    .locale-select {
      padding: 0.25rem 0.5rem;
      border: 1px solid var(--color-border);
      border-radius: 4px;
      background: var(--color-bg);
      color: var(--color-fg);
      font-size: 0.875rem;
      cursor: pointer;
      transition: border-color 0.2s;
    }

    .locale-select:hover {
      border-color: var(--color-accent);
    }

    .locale-select:focus {
      outline: none;
      border-color: var(--color-accent);
      box-shadow: 0 0 0 2px var(--color-accent-fade);
    }

    .locale-option {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .locale-flag {
      font-size: 1.2em;
    }
  `;

  private i18n = createI18n(this);

  render() {
    const { locale, t, getAllLocales } = this.i18n;
    const locales = getAllLocales();

    return html`
      <select
        class="locale-select"
        .value=${locale}
        @change=${(e: Event) => {
          const select = e.target as HTMLSelectElement;
          this.i18n.locale = select.value as Locale;
        }}
      >
        ${Object.values(locales).map(
          (config) => html`
            <option value=${config.code}>
              ${config.flag} ${config.nativeName}
            </option>
          `
        )}
      </select>
    `;
  }
}
