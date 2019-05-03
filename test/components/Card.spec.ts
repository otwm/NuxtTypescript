import {createLocalVue, mount, shallowMount, VueClass} from '@vue/test-utils'
import Card from '../../components/Card.vue'

const localVue = createLocalVue()
let wrapper = null

describe('Card Component', () => {
  test('card test',() => {
    // @ts-ignore
    wrapper = mount(Card, {
      propsData: {
        person: {
          id: 1,
          first_name: 'dong o',
          last_name: 'kim',
          contact: {
            email: 'xxx@xx.com',
            phone: 'xxx'
          },
          gender: 'mail',
          ip_address: '127.0.01',
          avatar: 'avatar'
        }
      }
    })
    expect(true).toBe(true)
  })
})