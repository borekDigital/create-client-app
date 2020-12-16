import { Vue } from 'nuxt-property-decorator'
import AppLoading from './AppLoading.vue'

let component: AppLoading

describe('AppLoading Vue-Component', () => {
  beforeEach(() => {
    component = new AppLoading()
  })

  it('should be created', () => {
    expect(component).toBeInstanceOf(Vue)
  })
})
