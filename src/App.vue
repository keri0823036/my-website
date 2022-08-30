<template>
  <div id="header" class="header">
    <div class="header__left">
      <router-link to="/">Keri T.</router-link>
    </div>
    <div class="header__right">
      <router-link v-if="$route.path==='/about'" class="header__right__navi" to="/" v-t="'header.portfolio'" />
      <router-link v-else class="header__right__navi" to="/about" v-t="'header.about'" />
      <!-- <span>|</span>
      <LangSwitch class="header__right__lang" /> -->
    </div>
  </div>
  <div class="leaf-background">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M22.375.065C21.037.12,9.179.721,4.92,4.979A10.018,10.018,0,0,0,3.939,17.94L.007,21.879,2.128,24,6.06,20.061a10.019,10.019,0,0,0,12.961-.981c4.342-4.342,4.868-16.134,4.914-17.464L23.991,0ZM16.9,16.958a7,7,0,0,1-8.683.947l8.72-8.719L14.814,7.064,6.1,15.784A7,7,0,0,1,7.042,7.1c2.512-2.513,9.738-3.595,13.8-3.932C20.523,7.206,19.465,14.393,16.9,16.958Z"/></svg>
  </div>
  <router-view />
  <div id="footer" class="footer">
    <div class="footer__phone">
      <p
        class="footer__phone__title title"
        v-t="'footer.phone_title'"
      />
      <p
        class="footer__phone__text"
        v-t="'common.phone'"
      />
    </div>
    <div class="footer__email">
      <p
        class="footer__email__title title"
        v-t="'footer.email_title'"
      />
      <p
        class="footer__email__text"
        v-t="'common.email'"
      />
    </div>
    <div class="footer__follow">
      <p
        class="footer__follow__title title"
        v-t="'footer.follow_title'"
      />
      <div class="footer__follow__icon-wrap">
        <a
          v-for="socialMedia in socialMediaData"
          :key="socialMedia.key"
          :href="socialMedia.link"
          target="_blank"
          class="footer__follow__icon"
          v-html="socialMedia.icon"
        />
      </div>
    </div>
    <div class="footer__copyright">
      <p v-t="'footer.copyright'" />
      <p v-html="$t('footer.uicon')" />
    </div>
  </div>
  <transition name="slide-up">
    <div v-show="isShowToTheTop" class="go-to-top" @click="scrollToElement('#header')">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
        <path d="M21,0H3V2H11.77c-.28,.056-.547,.212-.753,.445l-5.017,5.555h5V24h2V8h5L12.983,2.445c-.206-.233-.473-.389-.753-.445h8.77V0Z"/>
      </svg>
    </div>
  </transition>
</template>

<script>
import { useI18n } from "vue-i18n"
import { reactive } from '@vue/reactivity';
// import LangSwitch from '@/components/LangSwitch'
import socialMedia from '@/config/socialMedia'
import { scrollToElement } from '@/scripts/common'
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core';

export default {
  // components: { LangSwitch },
  setup() {
    const { locale } = useI18n()
    const socialMediaData = reactive(socialMedia)
    let isShowToTheTop = ref(false)

    onMounted(() => {
      const section = document.querySelector('#header')
      const options = {
        threshold: 0.5
      }
      const observer = new IntersectionObserver((entries) =>  {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            isShowToTheTop.value = false
          } else {
            isShowToTheTop.value = true
          }
        })
      }, options)

      observer.observe(section)
    })

    return {
      isShowToTheTop,
      locale,
      socialMediaData,
      scrollToElement
    }
  },
};
</script>

<style lang="scss">
.header {
  @include flex($justify-content: space-between, );
  width: calc(100% - 28%);
  padding: 60px 14%;
  z-index: $z-header;

  &__left {
    font-size: $font-xl;
  }

  &__right {
    @include flex();
    font-size: $font-lg;

    &__navi {
      @media (any-hover: hover) {
        &:hover {
          color: $gray-300;
        }
      }
    }

    &__lang {
      min-width: 88px;
    }

    span {
      color: $gray-300;
      margin: 0 12px;
    }
  }
}


.leaf-background {
  @include position(absolute, $top: -126px, $right: 10%);
  transform: rotate(180deg);
  z-index: -1;

  svg {
    width: 90%;
    max-width: 512px;
  }

  path {
    fill: $gray-100;
  }
}

.footer {
  @include flex($justify-content: space-between, $align-items: flex-start);
  padding: 80px 14%;
  border-top: 1px solid $gray-300;

  @include breakpoint(xlpad) {
    flex-direction: column;
  }

  & > div:not(:last-child) {
    @include breakpoint(xlpad) {
      margin-bottom: 24px;
    }
  }

  .title {
    font-size: $font-m;
    margin-bottom: 12px;
  }
  
  &__follow {
    &__icon {
      width: 24px;
      height: 24px;

      &:not(:last-of-type) {
        margin-right: 12px;
      }

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }

  &__copyright {  
    p {
      font-size: $font-xs;
    }

    a {
      text-decoration: underline;
    }
  }
}

.go-to-top {
  @include flex;
  @include position(fixed, $bottom: 20px, $right: 20px);
  background-color: $light-green;
  width: 40px;
  height: 40px;
  padding: 10px;
  cursor: pointer;

  @media (any-hover: hover) {
    &:hover {
      background-color: $dark-green;
    }
  }

  svg {
    width: 30px;
    height: 30px;

    path {
      fill: $white;
    }
  }
}

.slide-up-enter-active, .slide-up-leave-active {
  transition: all .3s ease-in-out;
}

.slide-up-enter-from, .slide-up-leave-to {
  bottom: -100px;
}
</style>
