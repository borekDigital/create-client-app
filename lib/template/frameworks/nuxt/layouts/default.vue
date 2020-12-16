<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import AppHeader from '~/components/AppHeader'
import AppFooter from '~/components/AppFooter'

@Component({
  components: {
    AppHeader,
    AppFooter,
  },
})
export default class DefaultLayout extends Vue {
}
</script>

<template>
  <v-app>
    <AppHeader />
    <v-main>
      <nuxt />
    </v-main>
    <AppFooter />
  </v-app>
</template>
