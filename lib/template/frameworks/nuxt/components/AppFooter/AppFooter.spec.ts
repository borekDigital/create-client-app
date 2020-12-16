import { shallowMount, Wrapper } from '@vue/test-utils'
import { Vue } from 'nuxt-property-decorator'
import AppFooter from './AppFooter.vue'
import { mockRootState } from '~/__mocks__/store.mocks'

let wrapper: Wrapper<AppFooter & { [key: string]: any }>

// mock child component imports to get a valid test coverage
jest.mock('~/components/AppHomeLink', () => { return null })

describe('AppFooter Vue-Component', () => {
  beforeEach(() => {
    wrapper = shallowMount(AppFooter, {
      mocks: {
        $t: (msg: string) => msg,
        $store: { state: mockRootState },
      },
      stubs: [
        'v-footer',
        'v-container',
        'v-btn',
        'v-divider',
        'AppHomeLink',
      ],
    })
  })

  it('should be created', () => {
    expect(wrapper.vm).toBeInstanceOf(Vue)
    expect(wrapper.html()).toBeTruthy()
  })
})
