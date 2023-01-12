<template>
  <div
      id="alert"
      class="alert"
      v-show="!isDestroyed"
  >
    <div :class="`alert-wrapper ${selectedStyle}`">
      <Icon name="ic:sharp-close" class="closeIcon" @click="closeAlert" />

      <div class="row my-0">
        <div class="col-1">
          <Icon name="ic:sharp-error" />
        </div>

        <div class="col-11">
          <h5>
            {{ props.title }}
          </h5>

          <p v-html="props.text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: undefined,
  },
  text: {
    type: String,
    default: undefined,
  },
  type: {
    type: String,
    default: 'primary',
  },
})

const isDestroyed = ref<Boolean>(false)

const selectedStyle = 'alert-wrapper-' + props.type

const closeAlert = () => {
  isDestroyed.value = true
}

if (typeof window !== "undefined") {
  let scrollPosition = window.scrollY

  const header = document.getElementById("alert")
  const scrollChange = 1

  const add_class_on_scroll = () => header.classList.add('alert-scroll')
  const remove_class_on_scroll = () =>  header.classList.remove('alert-scroll')

  window.addEventListener(
      'scroll', function() {
        scrollPosition = window.scrollY;

        if (scrollPosition >= scrollChange) { add_class_on_scroll() }
        else { remove_class_on_scroll() }
      }
  )
}
</script>

<style lang="sass" scoped>
$alertRadius: .25rem
$alertTitleSize: map-get($fontSizes, "normal")
$alertTitleWeight: map-get($fontWeights, "bold")
$alertTextSize: map-get($fontSizes, "small")

.alert
  position: fixed
  top: 6rem
  right: 0
  padding: .5rem 1rem
  width: 100%
  z-index: 9
  transition: all 300ms ease-in-out

  @include media-queries-up(md)
    max-width: 50vw

  @include media-queries-up(lg)
    max-width: 30vw

  &-wrapper
    position: relative
    padding: 1rem 1.5rem
    border-radius: $alertRadius

    // color variations
    @each $color, $value in $themeColors
      &-#{$color}
        color: colorContrast($value)
        background: rgba($value, .9)

  &-scroll
    top: 4rem

    @include media-queries-up(md)
      max-width: 45vw

    @include media-queries-up(lg)
      max-width: 27vw

    .alert-wrapper
      padding: .75rem 1rem !important

  p
    opacity: .5

  .closeIcon
    position: absolute
    top: .5rem
    right: .5rem
    font-size: 1rem
    color: map-get($themeColors, "white")
    cursor: pointer
</style>
