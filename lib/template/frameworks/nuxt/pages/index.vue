<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Actions, RootState } from '~/types/Store'
import { Companies, Company } from '~/types/Companies'
import { companiesConfig } from '~/config/companies.config'
import { getCompanyByKey } from '~/utils/companies.utils'
import { setHtmlHead } from '~/utils/head.utils'
import { ThemeColors } from '~/modules/vuetify/preset.colors'

@Component({
})
export default class HomePage extends Vue {
  themeColors = ThemeColors
  appName = process.env.appName

  companies: Company[] = []
  company: Company | null = null
  companyCode: Companies | null = null

  linkId: string = ''

  get company$ () {
    return (this.$store.state as RootState).theCompany
  }

  head () {
    return setHtmlHead(
      this.company$,
      this.$tc('meta.title'),
      this.$tc('meta.description'),
    )
  }

  mounted () {
    this.companies = Object.values(companiesConfig)
    this.company = { ...this.company$ }
    this.companyCode = this.company.code
  }

  onCompanyChange () {
    if (this.companyCode && this.companyCode !== this.company$.code) {
      this.$store.dispatch(Actions.SetCompany, getCompanyByKey(this.companyCode))
    }
  }
}
</script>

<template>
  <div class="text-center height-100 d-flex align-center">
    <v-container>
      <header>
        <h1 class="text-h1">
          {{ appName }}
        </h1>
        <h2 class="text-h1 responsive-heading">
          {{ $t('page_title.main') }}
        </h2>
        <h4 class="subtitle-1 mb-6">
          {{ $t('page_title.sub', { company: company$.name }) }}
        </h4>
        <blockquote class="blockquote">
          This page is just for testing ☝️ Change its content and add further pages at our convenience.
        </blockquote>
      </header>
      <v-divider class="my-2" />
      <section>
        <blockquote class="blockquote">
          Company switcher - NOT FOR PRODUCTION USE 🧑‍🦯
        </blockquote>
        <v-row justify="center">
          <v-col cols="12" md="6" lg="4">
            <v-select
              v-if="companies.length"
              v-model="companyCode"
              :items="companies"
              item-text="name"
              item-value="code"
              label="Choose a company"
              outlined
              :change="onCompanyChange()"
            />
          </v-col>
        </v-row>
      </section>
    </v-container>
  </div>
</template>
