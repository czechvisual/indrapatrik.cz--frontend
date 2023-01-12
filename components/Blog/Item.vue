<template>
  <div class="col-12 col-md-6 col-xl-4 p-2">
    <div class="blogItem">
      <img :src="image">

      <h3>
        {{ title }}
      </h3>

      <p v-html="description" />

      <Button text="Zobrazit více" type="primary" />
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
  }
})
</script>

<style lang="sass" scoped>
.blogItem
  padding: 1.5rem
  background: map-get($grays, "100")

  img
    margin-bottom: 1rem
    height: 10rem
    width: 100%
    object-fit: cover

  p
    font-size: map-get($fontSizes, "small")
</style>
