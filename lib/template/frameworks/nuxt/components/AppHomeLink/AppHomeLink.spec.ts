import { shallowMount, Wrapper } from '@vue/test-utils'
import { Vue } from 'nuxt-property-decorator'
import AppHomeLink from './AppHomeLink.vue'
import { mockRootState } from '~/__mocks__/store.mocks'

let wrapper: Wrapper<AppHomeLink & { [key: string]: any }>

describe('AppLogo Vue-Component', () => {
  beforeEach(() => {
    wrapper = shallowMount(AppHomeLink, {
      mocks: {
        $t: (msg: string) => msg,
        $store: { state: mockRootState },
      },
      stubs: [
        'v-btn',
        'v-icon',
      ],
    })
  })

  it('should be created', () => {
    expect(wrapper.vm).toBeInstanceOf(Vue)
    expect(wrapper.html()).toBeTruthy()
  })
})
