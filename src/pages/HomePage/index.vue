<template>
  <div id="home-page">
    <div class="banner">
      <div class="banner__leaf">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M22.375.065C21.037.12,9.179.721,4.92,4.979A10.018,10.018,0,0,0,3.939,17.94L.007,21.879,2.128,24,6.06,20.061a10.019,10.019,0,0,0,12.961-.981c4.342-4.342,4.868-16.134,4.914-17.464L23.991,0ZM16.9,16.958a7,7,0,0,1-8.683.947l8.72-8.719L14.814,7.064,6.1,15.784A7,7,0,0,1,7.042,7.1c2.512-2.513,9.738-3.595,13.8-3.932C20.523,7.206,19.465,14.393,16.9,16.958Z"/></svg>
      </div>
      <h1 class="banner__title" v-t="'home.banner.hello'" />
      <h3 class="banner__subtitle" v-t="'home.banner.subtitle'" />
      <button class="banner__button" v-t="'home.banner.connect'" @click="scrollToElement('#footer')" />
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
import ProjectCard from '@/components/ProjectCard'
import projectData from  './projectData'

export default {
  name: 'HomePage',
  components: { ProjectCard },
  setup() {
    return { projectData, scrollToElement }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  padding: 100px 0 213px 20%;

  &__leaf {
    @include position(absolute, $top: -126px, $right: 10%);
    transform: rotate(180deg);
    z-index: -1;

    path {
      fill: $gray-100;
    }
  }

  &__title {
    font-size: $font-xl;
    margin-bottom: 8px;
  }
  &__subtitle {
    font-size: $font-lg;
    color: $gray-300;
    margin-bottom: 32px;
  }
}
.projects {
  position: relative;

  &__code-icon {
    @include position(absolute, $top: 50%, $left: 50%);
    transform: translate(-50%, -50%);
    z-index: -1;
  
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
</style>