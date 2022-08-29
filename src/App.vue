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
    <p class="footer__uicon-attribute">
      UIcons by <a href="https://www.flaticon.com/uicons">Flaticon</a>
    </p>
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

    return {
      locale,
      socialMediaData
    }
  },
};
</script>

<style lang="scss">
.header {
  @include position(fixed, $top: 0);
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

  &__uicon-attribute {
    color: $gray-300;
    font-size: 12px;
    text-align: center;
    a {
      color: $gray-300;
      text-decoration: underline;
    }
  }
}
</style>
