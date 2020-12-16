import { Companies, Company } from '~/types/Companies'
import { Locales } from '~/types/Locale'
import { companiesConfig, companyDefault } from '~/config/companies.config'
import { localeDefault } from '~/config/i18n.config'

export function getCompanyByHost (host: string): Company {
  // set default company
  let company: Company = companiesConfig[companyDefault]

  for (const val in Object.values(Companies)) {
    const comp = Object.values(Companies)[val]

    if (host.includes(companiesConfig[comp].domain)) {
      company = companiesConfig[comp]
    }
  }

  return company
}

export function getCompanyByKey (key: Companies | null): Company {
  // set default company
  let company: Company = companiesConfig[companyDefault]

  if (key && companiesConfig[key]) {
    company = companiesConfig[key]
  }

  return company
}

export function getLocaleFromCompany (company: Companies): string {
  // set default locale
  let locale: Locales = localeDefault

  if (companiesConfig[company]) {
    locale = companiesConfig[company].locale
  }

  return locale
}
