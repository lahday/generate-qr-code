import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // QrValue: '',
    QrList: [],
    disabledButton: false
  },
  getters: {
    QrList: (state) => state.QrList
  },
  mutations: {
    getQrCode( state, QrValue) {
      if ( QrValue ) {
        state.QrList.push(QrValue)
        console.log(QrValue)
      }
      if ( state.QrList.length == 10 ) {
        state.disabledButton = true
      }
    } 
  },
  actions: {
  },
  modules: {
  }
})
