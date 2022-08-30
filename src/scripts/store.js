import { createStore } from 'vuex'

export default createStore({
  state: {
    langsOption: [
      {
        key: 'zh-TW',
        title: 'CH',
      },
      {
        key: 'en',
        title: 'EN',
      }
    ],
    lang: null,
  },
  mutations: {
    setLanguage(state, value) {
      state.lang = value
      localStorage.setItem('lang', value)
    }
  }
})