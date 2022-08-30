<template>
  <div class="project-card">
		<div class="project-card__image">
			<img :src="data.imageUrl" />
		</div>
		<div class="project-card__content">
			<h5
				class="project-card__content__title"
				v-t="`home.projects.${data.key}.title`"
			/>
			<p 
				class="project-card__content__desc"
				v-t="`home.projects.${data.key}.desc`"
			/>
			<p class="project-card__content__tech">
				{{ $t('home.projects.tech_title') }}{{ $t(`home.projects.${data.key}.tech_list`) }}
			</p>
			<a
				:href="data.link[locale] || data.link"
				class="button"
				target="_blank"
				v-t="'home.projects.view_more'"
			/>
		</div>
	</div>
</template>
<script>
import { computed } from '@vue/runtime-core'
import { useI18n } from 'vue-i18n'
export default {
	props: {
		data: {
			type: Object,
			required: true
		}
	},

	setup() {
		const { locale } = useI18n()
		const lang = computed(() => locale.value)

		return {
			locale: lang
		}
	}
}
</script>

<style lang="scss" scoped>
.project-card {
	@include flex;
	padding: 0 14%;

	@include breakpoint(xlpad) {
		flex-direction: column;
	}

	&__image {
		width: 60%;
		margin-right: 30px;
		box-shadow: -40px 40px 0 0 $light-green;

		@include breakpoint(xlpad) {
			width: 100%;
			margin-right: 0;
			margin-bottom: 60px;
			box-shadow: none;
		}
	}

	&__content {
		width: 40%;
		margin-left: 30px;

		@include breakpoint(xlpad) {
			width: 100%;
			margin-left: 0;
		}

		&__title {
			font-size: $font-xl;
			margin-bottom: 20px;

			@include breakpoint(pad) {
				font-size: $font-lg;
			}
		}
		&__desc {
			line-height: 125%;
			margin-bottom: 20px;
		}
		&__tech {
			line-height: 125%;
			margin-bottom: 60px;
		}
	}
}
</style>
