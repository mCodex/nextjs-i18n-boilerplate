/* eslint no-underscore-dangle: 0*/
/* eslint global-require: 0*/

import { sprintf } from 'sprintf-js';

export default function i18n(lang, str, ...other) {
  const translations = {
    en: require('./locales/en'),
    pt: require('./locales/pt')
  };

  let locale = lang;

  const locales = Object.keys(translations);

  if (!locale || typeof locale !== 'string') return locales[0];

  if (locale.length > 2) {
    locale = locale.substring(0, 2);
  }

  if (locales.indexOf(locale) === -1) {
    [locale] = locales;
  }

  if (translations[locale][str]) {
    return sprintf(translations[locale][str], ...other);
  }

  return sprintf(str, ...other);
}

// i18n.toISO6392 = (l) => {
//   const langs = {
//     de: 'deu',
//     fi: 'fin',
//     fr: 'fra',
//     hr: 'hrv',
//     it: 'ita',
//     ja: 'jpn',
//     nl: 'nld',
//     pt: 'por',
//     ru: 'rus',
//     es: 'spa'
//   };
//   return langs[l];
// };
