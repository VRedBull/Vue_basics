import About from './About.vue'
import { shallowMount } from '@vue/test-utils'

describe('About', ()=>{
    // it('renders correctly',()=>{
    //     const wrapper=shallowMount(About)
    //     let header=wrapper.find('.about h2')
    //     expect(header.exists()).toBe(true)
    //     expect(header.text()).toBe('ABOUT is about ME')
    // }),
    it('renders correct;y',async()=>{
        const wrapper=shallowMount(About)
        let button=wrapper.find('button')
        const text = wrapper.find('#countid')

        expect(text.text()).toContain('The count is 0')

        await button.trigger('click')
        await button.trigger('click')

        expect(text.text()).toContain('The count is 1')
    })
})