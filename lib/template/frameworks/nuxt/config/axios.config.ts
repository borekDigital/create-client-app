/*
** Axios module configuration
** See https://axios.nuxtjs.org/options
*/
const env = process.env

export const apiBaseUrlRelative = '/api'

export const apiBaseUrlAbsolute = env.BASE_URL + apiBaseUrlRelative

export const axiosModuleConfig = {
  baseURL: apiBaseUrlAbsolute,
  browserBaseURL: env.NODE_ENV === 'development-staging' ? apiBaseUrlAbsolute : apiBaseUrlRelative,
}
