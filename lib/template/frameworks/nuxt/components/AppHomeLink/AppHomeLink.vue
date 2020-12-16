<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ThemeColors } from '~/modules/vuetify/preset.colors'
import { RootState } from '~/types/Store'

@Component({
})
export default class AppHomeLink extends Vue {
  themeColors = ThemeColors

  get company$ () {
    return (this.$store.state as RootState).theCompany
  }
}
</script>

<template src="./AppHomeLink.html" />
