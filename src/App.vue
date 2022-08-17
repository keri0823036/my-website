<template>
  <div class="lang-switch">
    <input type="radio" id="one" value="zh-TW" v-model="locale" />
    <label for="one">CH</label>
    /
    <input type="radio" id="two" value="en" v-model="locale" />
    <label for="two">EN</label>
  </div>
  <router-view />
  <h1 v-t="'hello'" />
</template>

<script>
import { useI18n } from "vue-i18n"

export default {
  name: "App",
  setup() {
    const { locale } = useI18n()

    return {
      locale
    }
  },
};
</script>

<style lang="scss"></style>
