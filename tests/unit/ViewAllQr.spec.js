import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ViewAllQr from '@/views/ViewAllQr.vue'


const localVue = createLocalVue()
localVue.use(Vuex)

describe('ViewAllQr', () => {

  let getters

  getters = {
    QrList : jest.fn()
  }

  const store = new Vuex.Store ({
    state: {
      getters,
      QrList: []
    } 
  })
  it( "Disables button when then the length of the array is equal to 10", async () => {
    const wrapper =  mount ( ViewAllQr , {store, localVue })

    const urls = ['a','b'];
    urls.forEach(async (url) => {
   const qrValue = await wrapper.find(`[data-test="${url}"]`)
   qrValue.setValue(QrValue)
   await wrapper.find("button").trigger("click")
   })
    
    expect(getters.QrList).toHaveLength(11)
  })       
})



  

//   const urls = ['a','b'];
//   urls.forEach(async url => {
//   const qrValue = await wrapper.find(`[data-test="${url}"]`)
//   qrValue.setValue(QrValue)
//   await wrapper.find("button").trigger("click")
//   })

// wrapper.find(".view-qr").trigger('click');
// await Vue.nextTick();

//   const viewrWrapper = await wrapper.find(ViewAllQr)

//   const pElements = wrapper.findAll(".all-qrs");
//   console.log('Header WRAPPER', viewrWrapper.html())

  // expect(wrapper.find(".QrList")).toHaveLength("10")
