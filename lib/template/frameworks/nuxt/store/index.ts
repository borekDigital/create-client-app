import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { Actions, Mutations, RootState } from '~/types/Store'
import { getCompanyByHost, getLocaleFromCompany } from '~/utils/companies.utils'
import { Company } from '~/types/Companies'
import { companiesConfig, companyDefault } from '~/config/companies.config'

export const state = (): RootState => ({
  theCompany: companiesConfig[companyDefault],
})

export const getters: GetterTree<RootState, RootState> = {
  theCompany: state => state.theCompany,
}

export const mutations: MutationTree<RootState> = {
  [Mutations.SetCompany]: (state, newCompany: Company) => (state.theCompany = newCompany),
}

export const actions: ActionTree<RootState, RootState> = {
  nuxtServerInit ({ dispatch }, { req }) {
    if (req && req.headers && req.headers.host) {
      const company: Company = getCompanyByHost(req.headers.host)

      dispatch(Actions.SetCompany, company)
    }
  },

  [Actions.SetCompany] ({ commit }, company: Company) {
    const locale: string = getLocaleFromCompany(company.code)

    commit(Mutations.SetCompany, company)
    this.$i18n.setLocale(locale)
  },
}
