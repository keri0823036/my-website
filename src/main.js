import { createApp } from 'vue'
import Router from './scripts/router'
import i18n from './scripts/i18n'
import Store from './scripts/store'
import App from './App.vue'

createApp(App)
	.use(Store)
	.use(Router)
	.use(i18n)
	.mount('#app')
