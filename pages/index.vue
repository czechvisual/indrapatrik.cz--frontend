<template>
  <div>
    <HeroSingle
        image="/img/indra_background.webp"
        :title="$t('hero.title')"
        :description="$t('hero.description')"
    />

    <nuxt-img
        preload
        class="portrait"
        src="/img/indra_body.png"
        sizes="sm:100vw md:100vw lg:100vw"
        quality="70"
        format="webp"
        loading="lazy"
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
  </div>
</template>

<script setup>
import {useLang} from "~/composable/useLang";

const { tm, rt } = useLang()
</script>

<style lang="sass" scoped>
.features
  @include flex ($direction: row, $justify: flex-start, $align: center)

  height: 30vh
  max-width: 50%

  &Item
    @include flex ($direction: row, $justify: flex-start, $align: flex-start)

    .icon
      margin-right: 1rem
      font-size: 2.5rem
      color: map-get($themeColors, "secondary")

    .content
      h3
        color: map-get($themeColors, "primary")

img.portrait
  position: absolute
  bottom: 0
  right: -3rem
  max-height: 80vh
  z-index: 0
</style>
