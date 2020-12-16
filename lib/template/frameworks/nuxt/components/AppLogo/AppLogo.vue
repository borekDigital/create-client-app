<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Companies } from '~/types/Companies'
import { RootState } from '~/types/Store'
import { ThemeColors } from '~/modules/vuetify/preset.colors'

@Component({
})
export default class AppLogo extends Vue {
  @Prop({ default: 60 }) size!: number

  companies = Companies
  themColors = ThemeColors

  get company$ () {
    return (this.$store.state as RootState).theCompany
  }
}
</script>

<template src="./AppLogo.html" />
<style src="./AppLogo.scss" lang="scss" scoped />
