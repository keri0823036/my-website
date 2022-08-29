<template>
  <div id="about-page">
    <div class="intro">
      <div class="intro__leaf">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M22.375.065C21.037.12,9.179.721,4.92,4.979A10.018,10.018,0,0,0,3.939,17.94L.007,21.879,2.128,24,6.06,20.061a10.019,10.019,0,0,0,12.961-.981c4.342-4.342,4.868-16.134,4.914-17.464L23.991,0ZM16.9,16.958a7,7,0,0,1-8.683.947l8.72-8.719L14.814,7.064,6.1,15.784A7,7,0,0,1,7.042,7.1c2.512-2.513,9.738-3.595,13.8-3.932C20.523,7.206,19.465,14.393,16.9,16.958Z"/></svg>
      </div>
      <div class="intro__content">
        <div class="intro__content__image">
          <img src="https://i.imgur.com/6WGqu8X.jpg" />
        </div>
        <div class="intro__content__info">
          <h3 v-t="'about.intro.hello'" />
          <p v-t="'about.intro.desc'" />
        </div>
      </div>
    </div>
    <div class="skills">
      <h4 class="skills__title" v-t="'about.skills.title'" />
      <div class="skills__wrap">
        <SkillCard 
          v-for="skill in skillsData"
          :key="skill.key"
          :data="skill"
        />
      </div>
    </div>
    <div class="experience">
      <h4 class="experience__title" v-t="'about.experience.title'" />
      <div class="experience__wrap">
        <ExperienceCard
          v-for="experience in experienceData"
          :key="experience.key"
          :data="experience"
        />
      </div>
    </div>
  </div>
</template>
<script>
import SkillCard from '@/components/SkillCard'
import ExperienceCard from '@/components/ExperienceCard'
import { skillsData, experienceData } from  './aboutData'

export default {
  name: 'AboutPage',
  components: { SkillCard, ExperienceCard },
	setup() {
    return { skillsData, experienceData }
	}
}
</script>
<style lang="scss" scoped>
#about-page {
  & > div:not(:last-of-type) {
    border-bottom: 1px solid $light-green;
  }
}

.intro {
  padding: 60px 14% 80px;

  &__leaf {
    @include position(absolute, $top: -126px, $right: 10%);
    transform: rotate(180deg);
    z-index: -1;

    path {
      fill: $gray-100;
    }
  }

  &__content {
    @include flex($justify-content: space-between);

    &__image {
      width: 100%;
      max-width: 360px;
      margin-right: 100px;
    }

    &__info {
      width: 100%;

      h3 {
        font-size: $font-lg;
        margin-bottom: 48px;
      }

      p {
        line-height: 125%;
      }
    }
  }
}

.skills {
  padding: 80px 14%;

  &__title {
    font-size: $font-lg;
    margin-bottom: 80px;
  }

  &__wrap {
    @include grid(3, $justify-content: space-between, $align-items: start);
    gap: 40px 80px;
  }
}
.experience {
  padding: 80px 14%;
  &__title {
    font-size: $font-lg;
    margin-bottom: 60px;
  }

  &__wrap {
    @include grid(1);
    gap: 60px 0px;
  }
}
</style>