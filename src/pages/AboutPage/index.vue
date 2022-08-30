<template>
  <div id="about-page">
    <div class="intro">
      <div class="intro__content">
        <div class="intro__content__image">
          <img src="https://i.imgur.com/6WGqu8X.jpg" />
        </div>
        <div class="intro__content__info">
          <h3 v-t="'about.intro.hello'" />
          <p v-html="$t('about.intro.desc')" />
          <button
            v-t="'about.intro.connect'"
            @click="scrollToElement('#footer')"
          />
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
import { scrollToElement } from '@/scripts/common'
import { skillsData, experienceData } from  './aboutData'

export default {
  name: 'AboutPage',
  components: { SkillCard, ExperienceCard },
	setup() {
    return { skillsData, experienceData, scrollToElement }
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

  &__content {
    @include flex($justify-content: space-between);
    @include  breakpoint(pad) {
      flex-direction: column-reverse;
    }

    &__image {
      width: 100%;
      max-width: 360px;
      margin-right: 100px;

      @include  breakpoint(pad) {
        max-width: unset;
        margin-right: 0;
        margin-top: 30px;
      }
    }

    &__info {
      width: 100%;

      h3 {
        font-size: $font-xl;
        margin-bottom: 32px;
      }

      p {
        line-height: 125%;
      }

      button {
        margin-top: 48px;
        @include  breakpoint(pad) {
          display: none;
        }
      }
    }
  }
}

.skills {
  padding: 80px 14%;

  &__title {
    font-size: $font-xl;
    margin-bottom: 80px;

    @include  breakpoint(pad) {
      text-align: center;
      margin-bottom: 60px;
    }
  }

  &__wrap {
    @include grid(3, $justify-content: space-between, $align-items: start);
    gap: 40px 80px;

    @include  breakpoint(xlpad) {
      gap: 40px;
    }

    @include  breakpoint(pad) {
      @include grid(2, $justify-content: space-between, $align-items: start);
    }

    @include  breakpoint(mobile) {
      @include grid(1, $justify-content: space-between, $align-items: start);
      gap: 40px 0;
    }
  }
}
.experience {
  padding: 80px 14%;

  &__title {
    font-size: $font-xl;
    margin-bottom: 80px;

    @include  breakpoint(pad) {
      text-align: center;
      margin-bottom: 60px;
    }
  }

  &__wrap {
    @include grid(1);
    gap: 60px 0px;

    @include  breakpoint(pad) {
      gap: 80px 0px;
    }
  }
}
</style>