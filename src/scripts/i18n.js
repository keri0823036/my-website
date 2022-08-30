import store from './store'
import { createI18n } from 'vue-i18n'
import zh from '../language/zh-TW.json'
import en from '../language/en.json'

let locale = 'zh-TW'

if (localStorage.getItem('lang')) {
  const localeData = localStorage.getItem('lang')
  locale = localeData !== null
		? localeData
		: 'zh-TW'
} else {
  localStorage.setItem('lang', locale)
}

store.commit('setLanguage', locale)

const i18n = createI18n({
	locale,
	legacy: false,
	fallbackLocale: 'en',
	messages: {
		'zh-TW': zh,
		'en': en
	}
});

export default i18n