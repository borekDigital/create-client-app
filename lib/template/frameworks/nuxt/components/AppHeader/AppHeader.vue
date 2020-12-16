<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Breakpoint } from 'vuetify/types/services/breakpoint'
import AppHomeLink from '~/components/AppHomeLink'
import AppLogo from '~/components/AppLogo'

@Component({
  components: {
    AppLogo,
    AppHomeLink,
  },
})
export default class AppHeader extends Vue {
  breakpoint: Partial<Breakpoint> = {}

  mounted () {
    // assign vuetify breakpoints after mount, because there is no screen size available in ssr
    this.breakpoint = this.$vuetify.breakpoint
  }
}
</script>

<template src="./AppHeader.html" />
