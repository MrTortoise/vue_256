import Vue from 'vue'
import TestComponent from '@/components/TestComponent'

describe('TestComponent.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(TestComponent)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h2').textContent)
      .toEqual('wtf yo - test complete')
  })
})
