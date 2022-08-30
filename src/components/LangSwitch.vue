<template>
  <div class="language-switch">
		<div
			v-for="(lang, index) in langsOption"
			:key="lang.key"
			class="language-switch__option"
		>
			<input
				v-model="language"
				:id="lang.key"
				:value="lang.key"
				type="radio"
			/>
			<label
				:class="{ 'language-switch--active': language === lang.key }"
				:for="lang.key"
				v-text="lang.title"
			/>
			<span v-if="index < langsOption.length - 1">/</span>
		</div>
	</div>
</template>
<script>
import { reactive, computed } from '@vue/reactivity'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'

export default {
  setup() {
    const { locale } = useI18n()
		const store = useStore()
		const langsOption = reactive(store.state.langsOption)
		const language = computed({
			get: () => store.state.lang,
			set: (val) => {
				if (val === store.state.lang) return
				locale.value = val
				store.commit('setLanguage', val)
			},
		})


    return {
			langsOption,
      language
    }
  }
}
</script>

<style lang="scss" scoped>
.language-switch {
	@include flex;

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

	span {
		margin: 0 4px;
	}
}
</style>
