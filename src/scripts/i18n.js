import { createI18n } from "vue-i18n";
import zh from "../language/zh-TW.json";
import en from "../language/en.json";

const i18n = createI18n({
	legacy: false,
	locale: "zh-TW",
	fallbackLocale: "zh-TW",
	messages: {
		"zh-TW": zh,
		"en": en
	}
});

export default i18n