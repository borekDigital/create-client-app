/*
** vuetify module configuration
** https://github.com/nuxt-community/vuetify-module
* import main styles and overrides for customization
*/

import { VuetifyPreset } from 'vuetify/types/services/presets'
import { ThemeColors } from '~/modules/vuetify/preset.colors'

require('~/modules/vuetify/main.scss')
require('~/modules/vuetify/overrides.scss')

const preset: Partial<VuetifyPreset> = {
// const preset: any = {
  breakpoint: {
    mobileBreakpoint: 1089,
    scrollBarWidth: 16,
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1105,
      lg: 1920,
    },
  },
  theme: {
    dark: false,
    default: 'light',
    disable: false,
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        [ThemeColors.Background]: '#FFFFFF',
        [ThemeColors.Brand]: '#878787',
        [ThemeColors.Primary]: '#212121',
        [ThemeColors.PrimaryInverted]: '#FFFFFF',
        [ThemeColors.Secondary]: '#05477A',
        [ThemeColors.Accent]: '#A32748',
        [ThemeColors.Anchor]: '#05477A',
        [ThemeColors.Error]: '#EB5757',
        [ThemeColors.Info]: '#0584BF',
        [ThemeColors.Success]: '#4DBA87',
        [ThemeColors.Warning]: '#FFC107',
        [ThemeColors.Collection]: '#BEA53E',
        [ThemeColors.Article]: '#BD5E01',
      },
      dark: {
        [ThemeColors.Background]: '#212121',
        [ThemeColors.Brand]: '#878787',
        [ThemeColors.Primary]: '#E2E2E2',
        [ThemeColors.Primary]: '#212121',
        [ThemeColors.Secondary]: '#0584BF',
        [ThemeColors.Accent]: '#D82748',
        [ThemeColors.Anchor]: '#FFFFFF',
        [ThemeColors.Error]: '#EB5757',
        [ThemeColors.Info]: '#0584BF',
        [ThemeColors.Success]: '#4DBA87',
        [ThemeColors.Warning]: '#FFC107',
        [ThemeColors.Collection]: '#BEA53E',
        [ThemeColors.Article]: '#BD5E01',
      },
    },
  },
}

export default preset
