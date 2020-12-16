import { shallowMount, Wrapper } from '@vue/test-utils'
import { Vue } from 'nuxt-property-decorator'
import AppHeader from './AppHeader.vue'

let wrapper: Wrapper<AppHeader & { [key: string]: any }>

// mock child component imports to get a valid test coverage
jest.mock('~/components/AppHomeLink', () => { return null })
jest.mock('~/components/AppLogo', () => { return null })

describe('AppHeader Vue-Component', () => {
  beforeEach(() => {
    wrapper = shallowMount(AppHeader, {
      mocks: {
        $vuetify: { breakpoint: { mdAndUp: true } },
      },
      stubs: [
        'v-app-bar',
        'v-container',
        'v-row',
        'v-col',
        'AppHomeLink',
        'AppLogo',
      ],
    })
  })

  it('should be created', () => {
    expect(wrapper.vm).toBeInstanceOf(Vue)
    expect(wrapper.html()).toBeTruthy()
  })
})
