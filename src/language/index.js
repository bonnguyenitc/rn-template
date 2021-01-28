import I18n from 'i18n-js';
import ja from './ja.json';

I18n.locale = 'ja';

I18n.fallbacks = true;
I18n.translations = {
    ja
};

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
    return I18n.t(name, params);
}

export const setLocale = (locale) => {
    I18n.locale = locale;
};

export default I18n;
