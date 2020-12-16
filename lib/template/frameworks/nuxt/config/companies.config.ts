import { Locales } from '~/types/Locale'
import { Companies, CompaniesConfig } from '~/types/Companies'

const { NODE_ENV } = process.env

export const companyDefault = Companies.Mdm

export const companiesConfig: CompaniesConfig = {
  [Companies.Mdm]: {
    code: Companies.Mdm,
    name: 'MDM',
    legalName: 'MDM Münzhandelsgesellschaft mbH & Co. KG Deutsche Münze',
    domain: NODE_ENV && NODE_ENV.includes('development') ? 'localhost' : 'mdm.de',
    home: 'https://www.mdm.de',
    locale: Locales.De,
    paths: {
      gtc: '/ueber-mdm/allgemeine-geschaeftsbedingungen',
      imprint: '/ueber-mdm/impressum/',
      privacy: '/service/Datenschutz/',
    },
  },
  [Companies.Stefm]: {
    code: Companies.Stefm,
    name: 'Société Francaise des Monnaies',
    legalName: 'Société Francaise des Monnaies',
    domain: NODE_ENV && NODE_ENV.includes('development') ? '127.0.0.1' : 'stefm.fr',
    home: 'https://www.stefm.fr',
    paths: {
      gtc: '/stefm-service/cgv/',
      imprint: '/stefm-service/mentions-legales/',
      privacy: '/stefm-service/protection-des-donnees',
    },
    locale: Locales.Fr,
  },
  [Companies.Borek]: {
    code: Companies.Borek,
    name: 'Richard Borek',
    legalName: 'Richard Borek GmbH & Co. KG',
    domain: 'borek.de',
    home: 'https://www.borek.de',
    paths: {
      gtc: '/borek-service/allgemeine-geschaeftsbedingungen/',
      imprint: '/borek-service/impressum/',
      privacy: '/borek-service/Datenschutz/',
    },
    locale: Locales.De,
  },
  [Companies.Imm]: {
    code: Companies.Imm,
    name: 'IMM Münz-Institut',
    legalName: 'IMM Münz-Institut - Institut für Münz- und Medaillenkunst GmbH',
    domain: 'imm-muenze.at',
    home: 'https://www.imm-muenze.at',
    paths: {
      gtc: '/imm-service/allgemeine-geschaeftsbedingungen/',
      imprint: '/imm-service/impressum/',
      privacy: '/imm-service/Datenschutz/',
    },
    locale: Locales.De,
  },
  [Companies.Muegue]: {
    code: Companies.Muegue,
    name: 'Münzen Günstiger',
    legalName: 'GFO Gesellschaft für Onlinehandel mbH & Co. KG',
    domain: 'xn--mnzen-gnstiger-gsbg.de',
    home: 'https://www.münzen-günstiger.de',
    paths: {
      gtc: '/agb',
      imprint: '/impressum/',
      privacy: '/datenschutz',
    },
    locale: Locales.De,
  },
}
