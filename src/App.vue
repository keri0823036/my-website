<template>
  <div id="header" class="header">
    <div class="header__left">
      <router-link to="/">Keri T.</router-link>
    </div>
    <div class="header__right">
      <router-link class="header__right__navi" to="/about" v-t="'header.about'" />
      <span>|</span>
      <LangSwitch class="header__right__lang" />
    </div>
  </div>
  <router-view />
  <div id="footer" class="footer">
    <div class="footer__social-wrap">
      <a
        v-for="socialMedia in socialMediaData"
        :key="socialMedia.key"
        :href="socialMedia.link"
        target="_blank"
        class="footer_social__icon"
        v-html="socialMedia.icon"
      />
    </div>
    <p
      class="footer__email"
      v-t="'common.email'"
    />
    <div class="footer__line"></div>
    <div class="footer__copyright">
      <p v-t="'footer.copyright'" />
      <p v-html="$t('footer.uicon')" />
    </div>
  </div>
  <div class="go-to-top" @click="scrollToElement('#header')">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
      <path d="M21,0H3V2H11.77c-.28,.056-.547,.212-.753,.445l-5.017,5.555h5V24h2V8h5L12.983,2.445c-.206-.233-.473-.389-.753-.445h8.77V0Z"/>
    </svg>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n"
import { reactive } from '@vue/reactivity';
import LangSwitch from '@/components/LangSwitch'
import socialMedia from '@/config/socialMedia'

export default {
  components: { LangSwitch },
  setup() {
    const { locale } = useI18n()
    const socialMediaData = reactive(socialMedia)
    function scrollToElement(selector, delay = 0) {
      const scroll = () => {
        const $current = document.querySelector(selector)

        if ($current) {
          const windowHeight = window.innerHeight
          let $ele = $current
          let offsetTop = 0

          do {
            offsetTop += $ele.offsetTop
          } while (($ele = $ele.offsetParent))

          let offset = offsetTop
          offset =
            $current.clientHeight > windowHeight
              ? offset
              : offset -
                (windowHeight - $current.clientHeight) / 2 

          window.scroll({ top: offset, behavior: 'smooth' })
        } else {
          console.warn(selector, 'does not exist.')
        }
      }

      setTimeout(() => {
        scroll()
      }, delay)
    }

    return {
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
    font-size: $font-lg;
  }

  &__right {
    @include flex();
    font-size: $font-m;

    &__lang {
      min-width: 88px;
    }

    span {
      color: $gray-300;
      margin: 0 12px;
    }
  }
}

.footer {
  padding-bottom: 80px;
  
  &__social-wrap {
    @include flex;
    margin-bottom: 12px;

    svg {
      width: 36px;
      height: 36px;
      margin: 0 15px;
    }
  }

  &__email {
    @include flex;
    font-size: 12px;
    text-align: center;
  }

  &__line {
    border-bottom: 1px solid $gray-300;
    margin: 20px auto;
    opacity: 0.3;
  }

  &__copyright {
    @include flex;
  
    p {
      color: $gray-300;
      font-size: 12px;
      text-align: center;
      
      &:not(:last-of-type) {
        margin-right: 12px;
      }
    }

    a {
      color: $gray-300;
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

  &:hover {
    background-color: $dark-green;
  }

  svg {
    width: 30px;
    height: 30px;

    path {
      fill: $white;
    }
  }
}
</style>
