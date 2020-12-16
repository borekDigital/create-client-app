<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { RootState } from '~/types/Store'
import { ExternalLink } from '~/types/Link'
import AppHomeLink from '~/components/AppHomeLink'

@Component({
  components: {
    AppHomeLink,
  },
})
export default class AppFooter extends Vue {
  links: ExternalLink[] = []

  get company$ () {
    return (this.$store.state as RootState).theCompany
  }

  created () {
    this.links = [
      {
        text: 'base.links.privacy.link_text',
        url: this.getFullUrl(this.company$.paths.privacy),
      },
      {
        text: 'base.links.gtc.link_text',
        url: this.getFullUrl(this.company$.paths.gtc),
      },
      {
        text: 'base.links.imprint.link_text',
        url: this.getFullUrl(this.company$.paths.imprint),
      },
    ]
  }

  getFullUrl (path: string): string {
    return this.company$.home + path
  }
}
</script>

<template src="./AppFooter.html" />
