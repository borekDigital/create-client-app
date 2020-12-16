import { shallowMount, Wrapper } from '@vue/test-utils'
import { Vue } from 'nuxt-property-decorator'
import AppLogo from './AppLogo.vue'
import { mockRootState } from '~/__mocks__/store.mocks'

let wrapper: Wrapper<AppLogo & { [key: string]: any }>

describe('AppLogo Vue-Component', () => {
  beforeEach(() => {
    wrapper = shallowMount(AppLogo, {
      propsData: {
        size: 75,
      },
      mocks: {
        $store: { state: mockRootState },
      },
      stubs: [
        'nuxt-link',
      ],
    })
  })

  it('should be created', () => {
    expect(wrapper.vm).toBeInstanceOf(Vue)
    expect(wrapper.html()).toBeTruthy()
  })
})
