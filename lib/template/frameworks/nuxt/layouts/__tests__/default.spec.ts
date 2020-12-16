import { shallowMount, Wrapper } from '@vue/test-utils'
import { Vue } from 'nuxt-property-decorator'
import DefaultLayout from '../default.vue'

let wrapper: Wrapper<DefaultLayout & { [key: string]: any }>

// mock child component imports to get a valid test coverage
jest.mock('~/components/AppHeader', () => { return null })
jest.mock('~/components/AppFooter', () => { return null })

describe('Default Layout Component', () => {
  beforeEach(() => {
    wrapper = shallowMount(DefaultLayout, {
      stubs: [
        'v-app',
        'v-main',
        'nuxt',
        'AppHeader',
        'AppFooter',
        'AppLoading',
      ],
    })
  })

  it('should be created', () => {
    expect(wrapper.vm).toBeInstanceOf(Vue)
  })
})
