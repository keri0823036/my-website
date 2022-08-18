<template>
  <div class="language-switch">
		<input type="radio" id="one" value="zh-TW" v-model="locale" />
    <label :class="{ 'language-switch--active': locale === 'zh-TW' }" for="one">CH</label>
    /
    <input type="radio" id="two" value="en" v-model="locale" />
    <label :class="{ 'language-switch--active': locale === 'en' }" for="two">EN</label>
	</div>
</template>
<script>
import { useI18n } from "vue-i18n"

export default {
  setup() {
    const { locale } = useI18n()

    return {
      locale
    }
  }
}
</script>

<style lang="scss" scoped>
.language-switch {
	&--active {
		color: $dark-green;
		font-weight: $weight-bold;
	}

	input {
		display: none;
	}

	label {
		cursor: pointer;
	}
}
</style>
