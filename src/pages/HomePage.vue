<template>
  <div id="home-page">
    <div class="banner">
      <div class="banner__leaf">
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M22.375.065C21.037.12,9.179.721,4.92,4.979A10.018,10.018,0,0,0,3.939,17.94L.007,21.879,2.128,24,6.06,20.061a10.019,10.019,0,0,0,12.961-.981c4.342-4.342,4.868-16.134,4.914-17.464L23.991,0ZM16.9,16.958a7,7,0,0,1-8.683.947l8.72-8.719L14.814,7.064,6.1,15.784A7,7,0,0,1,7.042,7.1c2.512-2.513,9.738-3.595,13.8-3.932C20.523,7.206,19.465,14.393,16.9,16.958Z"/></svg>
      </div>
      <h1 class="banner__title" v-t="'home.banner.hello'" />
      <h3 class="banner__subtitle" v-t="'home.banner.subtitle'" />
      <button class="banner__button" v-t="'home.banner.resume'" />
    </div>
    <div class="projects"></div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  padding: 272px 0 213px 20%;

  &__leaf {
    @include position(absolute, $top: -126px, $right: 10%);
    transform: rotate(180deg);
    z-index: -1;

    path {
      fill: rgba(235, 235, 235, 0.35)
    }
  }

  &__title {
    font-size: $font-lg;
    margin-bottom: 8px;
  }
  &__subtitle {
    font-size: $font-m;
    color: $light-gray;
    margin-bottom: 32px;
  }
}
</style>