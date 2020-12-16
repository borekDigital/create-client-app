/*
** mocks to be used in unit tests
*/
import { companiesConfig, companyDefault } from '~/config/companies.config'
import { RootState } from '~/types/Store'

export const mockRootState: RootState = {
  theCompany: companiesConfig[companyDefault],
}
