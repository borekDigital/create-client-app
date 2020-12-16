<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({
  layout: 'empty',
})
export default class ErrorLayout extends Vue {
  @Prop({ default: null }) error!: any

  errorDefault: string = 'An error occurred'
  errorNotFound: string = '404 Not Found'

  get errorMessage (): string {
    return this.error.statusCode === 404 ? this.errorNotFound : this.errorDefault
  }
}
</script>

<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>
          {{ errorMessage }}
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>
