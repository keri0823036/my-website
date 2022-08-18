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
</template>

<script>
import { useI18n } from "vue-i18n"
import LangSwitch from '@/components/LangSwitch'

export default {
  components: { LangSwitch },
  setup() {
    const { locale } = useI18n()

    return {
      locale
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
      color: $light-gray;
      margin: 0 12px;
    }
  }
}
</style>
