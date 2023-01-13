<template>
  <div class="container-fluid px-0 hero">
    <nuxt-img
        preload
        :src="image"
        sizes="sm:100vw md:100vw lg:100vw"
        quality="70"
        format="webp"
        loading="lazy"
    />

    <div class="container">
      <div class="row">
        <div class="col">
          <h1>
            {{ title }}
          </h1>

          <template v-if="description">
            <p class="large">
              {{ description }}
            </p>
          </template>

          <template v-else>
            <slot />
          </template>

          <template v-if="button">
            <Button
                :text="button"
                type="secondary"
                size="medium"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  button: {
    type: String,
    default: ''
  }
})
</script>

<style lang="sass" scoped>
.hero
  position: relative
  color: map-get($themeColors, "white")
  background: map-get($themeColors, "primary")
  height: 65vh

  img
    position: absolute
    width: 100%
    height: 100%
    object-fit: cover
    // opacity: .15
    z-index: 0

  p
    padding: 3rem 0 0
    opacity: .75

    @include media-queries-down(sm)
      display: none

  p,
  h1
    max-width: 60%

    @include media-queries-down(sm)
      max-width: 100%

  .container
    @include flex ($direction: column, $justify: center, $align: flex-end)

    position: relative
    padding: 0 3rem
    height: 100%
    z-index: 1
</style>
