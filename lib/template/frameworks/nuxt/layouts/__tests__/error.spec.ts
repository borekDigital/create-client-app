import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils'
import { Vue } from 'nuxt-property-decorator'
import VueMeta from 'vue-meta'
import ErrorLayout from '../error.vue'

let wrapper: Wrapper<ErrorLayout & { [key: string]: any }>
const localVue = createLocalVue()
localVue.use(VueMeta, { keyName: 'head' })

const mockError404 = {
  message: 'This page could not be found',
  path: '/invalid/path',
  statusCode: 404,
}

const mockErrorServer = {
  message: 'ServerError',
  statusCode: 500,
}

describe('Error Layout Component', () => {
  let mountFunction: (error: any) => Wrapper<ErrorLayout & { [key: string]: any }>

  beforeEach(() => {
    mountFunction = (error: any) => {
      return shallowMount(ErrorLayout, {
        localVue,
        propsData: {
          error,
        },
        mocks: {
          $i18n: {
            locale: 'de',
          },
        },
        stubs: [
          'v-container',
          'v-row',
          'v-col',
        ],
      })
    }
  })

  it('should be created', () => {
    wrapper = mountFunction(mockError404)
    expect(wrapper.vm).toBeInstanceOf(Vue)
    expect(wrapper.html()).toBeTruthy()
  })

  it('should set the appropriate title', () => {
    wrapper = mountFunction(mockError404)
    expect(wrapper.vm.errorMessage).toEqual('404 Not Found')

    wrapper = mountFunction(mockErrorServer)
    expect(wrapper.vm.errorMessage).toEqual('An error occurred')
  })
})
