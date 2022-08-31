<template>
  <div id="home-page">
    <div class="banner">
      <h1 class="banner__title" v-t="'home.banner.hello'" />
      <h3
        class="banner__subtitle"
        v-text="subtitle"
      />
      <a
        :href="$t('common.resume_link')"
        target="_blank"
        class="button"
        v-t="'common.resume_button_text'"
      />
    </div>
    <div class="projects">
      <ProjectCard
        v-for="data in projectData"
        :key="data.key"
        :data="data"
      />
      <div class="projects__code-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12h12V12C24,5.383,18.617,0,12,0Zm10,22H12c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10v10Zm-3.582-11.406c.775,.775,.775,2.037,0,2.812l-3.298,3.298-1.414-1.414,3.298-3.298-3.298-3.283,1.414-1.414,3.298,3.298Zm-8.124-1.884l-3.298,3.298,3.298,3.283-1.414,1.414-3.298-3.298c-.775-.775-.775-2.037,0-2.812l3.298-3.298,1.414,1.414Z"/></svg>
      </div>
    </div>
  </div>
</template>

<script>
import { scrollToElement } from '@/scripts/common'
import { useI18n } from 'vue-i18n'
import ProjectCard from '@/components/ProjectCard'
import projectData from  './projectData'
import { computed } from '@vue/runtime-core'

export default {
  name: 'HomePage',
  components: { ProjectCard },
  setup() {
    const { t, tm } = useI18n()

    const subtitle = computed(() => {
      const list = tm('home.banner.subtitle_list')

      return list.reduce((final, str, index) => {
        final += str

        if (index < list.length - 1) {
          final += t('common.pipe')
        }

        return final
      }, '')
    })

    return { subtitle, projectData, scrollToElement }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  padding: 100px 0 213px 20%;

  @include  breakpoint(mobile) {
    padding: 100px 14% 200px;
  }

  &__title {
    font-size: $font-xl;
    margin-bottom: 8px;
  }

  &__subtitle {
    font-size: $font-lg;
    color: $gray-300;
    margin-bottom: 32px;

    @include  breakpoint(mobile) {
      font-size: $font-m;
    }
  }
}
.projects {
  position: relative;

  &__code-icon {
    @include position(absolute, $top: 50%, $left: 50%);
    transform: translate(-50%, -50%);
    z-index: -1;

    svg {
      width: 90vw;
      max-width: 512px;
    }
  
    path {
      fill: $gray-100;
    }
  }

  :deep(.project-card) {
    &:not(:last-child) {
      margin-bottom: 165px;
    }

    &:last-child {
      margin-bottom: 237px;
    }

    @media only screen and (min-width: 901px) {
      &:nth-child(even){
        flex-direction: row-reverse;

        .project-card__image {
          margin-right: 0;
          margin-left: 30px;
          box-shadow: 40px 40px 0 0 $light-green;
        }

        .project-card__content {
          margin-right: 30px;
          margin-left: 0;
        }
      }
    }
  }
}
</style>