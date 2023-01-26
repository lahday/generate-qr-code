import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Home from "@/views/Home.vue"


const localVue = createLocalVue()

localVue.use(Vuex)



describe('Home.vue', () => {

  let mutations
  let store

beforeEach(() => { 
mutations = {
  getQrCode: jest.fn(),
  QrValue: jest.fn()
}
store = new Vuex.Store ({
  mutations,
  state:{
    QrList: []
  }
})
})

  it("Should render url passed ", async() => {
    const wrapper = mount (Home, {store, localVue});
    const input = wrapper.find('input')

     await wrapper.find('input').setValue('/new-url')
     
     expect(input.element.value).toBe('/new-url')
  
  })

    it( "commits a mutation when button is clicked", async () => {
    const wrapper = mount (Home, {
      store, localVue
    })

    const QrValue = 'https://google.com'
    const qrValue =  wrapper.find('[data-test="Qrvalue"]')
    qrValue.setValue(QrValue)
    await wrapper.find("button").trigger("click")

    expect(mutations.getQrCode).toHaveBeenCalledWith({"QrList": []}, "https://google.com")
  })
   

})
