import { createApp } from 'vue'
import Router from './scripts/router'
import i18n from './scripts/i18n'
import App from './App.vue'

createApp(App)
	.use(i18n)
	.use(Router)
	.mount('#app')
