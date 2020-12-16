// eslint-disable-next-line import/named
import { NuxtVueI18n } from 'nuxt-i18n'
import { DateTimeFormats, NumberFormats } from 'vue-i18n'
import { Locales, Localized } from '../types/Locale'
import deDe from '../i18n/de_DE'
import frFR from '../i18n/fr_FR'
import AllOptionsInterface = NuxtVueI18n.Options.AllOptionsInterface

/*
** Declare custom dateTimeFormats
** See http://www.ecma-international.org/ecma-402/2.0/#sec-InitializeDateTimeFormat
*/
const dateTimeFormats: DateTimeFormats & Localized = {
  de: {
    dateTimeFormatDefault: {
      year: 'numeric', month: '2-digit', day: '2-digit',
    },
  },
  fr: {
    dateTimeFormatDefault: {
      year: 'numeric', month: '2-digit', day: '2-digit',
    },
  },
}

/*
** Declare custom dateTimeFormats
** See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
*/
const numberFormats: NumberFormats & Localized = {
  de: {
    numberFormatCurrency: {
      style: 'currency', currency: 'EUR',
    },
  },
  fr: {
    numberFormatCurrency: {
      style: 'currency', currency: 'EUR',
    },
  },
}

export const localeDefault = Locales.De

export const i18nModuleConfig: AllOptionsInterface = {
  locales: [Locales.De, Locales.Fr],
  defaultLocale: localeDefault,
  strategy: 'no_prefix',
  vueI18n: {
    fallbackLocale: Locales.De,
    dateTimeFormats,
    numberFormats,
    messages: {
      [Locales.De]: deDe,
      [Locales.Fr]: frFR,
    },
  },
  parsePages: false,
  vuex: {
    syncLocale: true,
  },
}
