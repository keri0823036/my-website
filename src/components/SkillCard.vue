<template>
  <div
		:class="[`skill-card--${data.key}`]"
		class="skill-card"
	>
		<div
			class="skill-card__icon"
			v-html="data.icon"
		/>
		<h5
			class="skill-card__title"
			v-t="`about.skills.${data.key}.title`"
		/>
		<hr />
		<ul class="skill-card__detail">
			<li
				v-for="(detail, index) in $tm(`about.skills.${data.key}.detail_list`)"
				:key="`${data.key}-detail-${index}`"
				v-text="detail"
			/>
		</ul>
	</div>
</template>
<script>
export default {
	props: {
		data: {
			type: Object,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
.skill-card {
	@include flex;
	width: 100%;
	flex-direction: column;

	&__icon {
		@include flex;
		width: 80px;
		height: 80px;
		margin-bottom: 12px;

		:deep(svg) {
			width: 60px;
			height: 60px;

			path {
				fill: $dark-green;
			}
		}

	}

	&__title {
		font-size: $font-lg;
		text-align: center;
	}

	&__detail {
		list-style: inside disc;
		font-size: $font-sm;
		:not(:last-child) {
			margin-bottom: 4px;
		}

		::marker {
			font-size: 8px;
			margin-right: 4px;
		}
	}

	hr {
		width: 100%;
		border: 1px solid $dark-green;
		margin: 20px 0;
	}

	&--javascript {
		.skill-card__icon {
			:deep(svg) {
				background-color: $dark-green;

				path {
					fill: $white;
				}
			}
		}
	}
}
</style>
