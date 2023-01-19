<template>
  <div>
    <HeroSingle
        image="/img/indra_background.webp"
        :title="$t('hero.title')"
        :description="$t('hero.description')"
    />

    <div class="container">
      <div class="features">
        <div
            v-for="(item, index) in tm('features')"
            :key="index"
            class="featuresItem">
          <Icon name="fe:check" />

          <div class="content">
            <h3>
              {{ rt(item.title) }}
            </h3>

            <p>
              {{ rt(item.description) }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bounds">
      <div class="bounds-wrap">
        <nuxt-img
            preload
            class="portrait"
            src="/img/indra_body.png"
            sizes="sm:100vw md:100vw lg:100vw"
            quality="70"
            format="webp"
            loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import {useLang} from "~/composable/useLang";

const { tm, rt } = useLang()
</script>

<style lang="sass" scoped>
.bounds
  position: absolute
  bottom: 0
  right: 0
  width: 100%
  height: 100%
  z-index: 10

  &-wrap
    position: relative
    width: 100%
    height: 100%

    @include media-queries-up(lg)
      margin: 0 auto
      max-width: $wrap

    img.portrait
      position: absolute
      bottom: 0
      right: -20rem
      max-height: 80vh
      z-index: 0

      @include media-queries-down(xl)
        right: -20rem

      @include media-queries-down(lg)
        right: -10rem

      @include media-queries-down(md)
        right: -15rem

      @include media-queries-down(sm)
        display: none

.features
  @include flex ($direction: row, $justify: flex-start, $align: center)

  height: 30vh
  max-width: 50%

  &Item
    @include flex ($direction: row, $justify: flex-start, $align: flex-start)

    @include media-queries-up(md)
      min-height: 8rem


    .icon
      margin-right: 1rem
      font-size: 2.5rem
      color: map-get($themeColors, "secondary")

      @include media-queries-down(sm)
        margin-right: .5rem
        font-size: 1.5rem

    .content
      height: 100%

      h3
        color: map-get($themeColors, "primary")

        @include media-queries-down(sm)
          font-size: 1rem

      p
        @include media-queries-down(sm)
          display: none
</style>
