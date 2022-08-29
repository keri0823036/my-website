<template>
  <div class="experience-card">
    <div class="experience-card__icon">
      <img :src="data.icon" />
    </div>
    <div class="experience-card__content">
      <p
        class="experience-card__content__buring-date"
        v-t="`about.experience.${key}.during_date`"
      />
      <h5
        class="experience-card__content__company"
        v-t="`about.experience.${key}.company`"
      />
      <p
        class="experience-card__content__job-title"
        v-t="`about.experience.${key}.job_title`"
      />
      <div
        v-for="detail in $tm(`about.experience.${key}.detail`)"
        :key="`${key}-detail-${detail.title}`"
        class="experience-card__content__detail"
      >
        <p
          class="detail__title"
          v-text="detail.title"
        />
        <ul class="detail__list">
          <li
            v-for="(item, index) in detail.list"
            :key="`${detail.title}-item-${index}`"
            v-text="item"
          />
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity'

export default {
  props: {
		data: {
			type: Object,
			required: true
		}
	},
  setup(props) {
    const key = ref(props.data.key)

    return {
      key
    }
  }
}
</script>
<style lang="scss" scoped>
.experience-card {
  @include flex($justify-content: flex-start, $align-items: flex-start);

  &__icon {
    width: 100%;
    max-width: 100px;
    margin-right: 60px;
  }

  &__content {
    &__buring-date {
      color: $gray-300;
    }

    &__company {
      font-size: $font-lg;
      margin-bottom: 8px;
    }

    &__job-title {
      margin-bottom: 32px;
    }

    .detail__title {
      font-weight: $weight-bold;
      color: $dark-green;
      margin-bottom: 4px;
    }

    .detail__list {
      list-style: inside disc;
      margin-bottom: 20px;

      ::marker {
        font-size: 8px;
        margin-right: 4px;
      }
    }
  }
}
</style>