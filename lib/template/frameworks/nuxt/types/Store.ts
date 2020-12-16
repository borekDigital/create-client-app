import { Company } from './Companies'

export interface RootState {
  theCompany: Company
}

export enum Actions {
  SetCompany = 'actionSetCompany'
}

export enum Mutations {
  SetCompany = 'mutationSetCompany'
}
