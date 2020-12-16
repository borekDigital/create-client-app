import { Locales } from './Locale'

export enum Companies {
  Borek = 'borek',
  Imm = 'imm',
  Mdm = 'mdm',
  Muegue = 'muegue',
  Stefm = 'stefm',
}

export type CompanyPaths = {
  gtc: string,
  imprint: string,
  privacy: string,
}

export type Company = {
  code: Companies,
  name: string,
  legalName: string,
  domain: string,
  home: string,
  paths: CompanyPaths
  locale: Locales,
}

export type CompaniesConfig = {
  [TKey in Companies]: Company
}
