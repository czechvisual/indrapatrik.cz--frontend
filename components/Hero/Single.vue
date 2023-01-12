<template>
  <div class="container-fluid px-0 hero">
    <nuxt-img
        preload
        provider="cloudinary"
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

          <p class="large">
            {{ description }}
          </p>

          <Button
              :text="button"
              type="secondary"
              size="medium"
          />
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

  img
    position: absolute
    width: 100%
    height: 100%
    object-fit: cover
    opacity: .15
    z-index: 0

  p
    padding: 0 0 3rem
    opacity: .75

    @include media-queries-up(lg)
      max-width: 70%

  .container
    @include flex ($direction: column, $justify: center, $align: flex-start)

    position: relative
    padding: 3rem 1rem
    height: 90vh
    z-index: 1

    @include media-queries-up(md)
      height: 30rem
</style>
