<template>
  <NuxtLink
      v-if="to"
      tag="a"
      :to="to"
      :class="`${defaultStyle} ${selectedStyle} ${selectedSize}`"
  >
    <slot>{{ text }}</slot>
  </NuxtLink>

  <button
      v-else-if="send"
      :class="`${defaultStyle} ${selectedStyle} ${selectedSize}`"
  >
    <slot>{{ text }}</slot>
  </button>

  <a
      v-else
      :class="`${defaultStyle} ${selectedStyle} ${selectedSize}`"
      :href="href"
      @click="onClick"
  >
    <slot>{{ text }}</slot>
  </a>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  // can be used any color from map $themeColors
  type: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: '',
  },
  to: {
    type: [String, Object],
    default: '',
  },
  href: {
    type: String,
    default: '',
  },
  send: {
    type: Boolean,
    default: false,
  },
})

const defaultStyle = `button`

const sizes = reactive<{
  [key: string]: string
}>({
  wide: 'button-wide',
  medium: 'button-medium',
  small: 'button-small'
})

const selectedStyle = 'button-' + props.type
const selectedSize = computed(() => sizes[props.size] || '')

const onClick = (event: MouseEvent) => {
  const router = useRouter()
  if (props.to) {
    router.push(props.to)
  }
  if (!props.href) {
    event.preventDefault()
  }
}
</script>

<style lang="sass" scoped>
.button,
button
  display: inline-block
  padding: .5rem 1.5rem
  text-align: center
  font-size: $buttonTextSize
  font-weight: $buttonTextWeight
  text-decoration: $buttonTextDecoration
  border-radius: $buttonBorderRadius
  border: none
  outline: none
  cursor: pointer
  transition: all 300ms ease-in-out

  &:not(:only-child)
    &:not(:last-child)
      margin-right: 1rem

  &::first-letter
    text-transform: uppercase

  &.disabled,
  &:disabled
    opacity: .5
    cursor: not-allowed

  :deep(i)
    margin-right: .5rem
    float: left

  // sizing
  &-wide
    @include flex($direction: row, $justify: center, $align: center)

    width: 100%

  &-medium
    min-width: 15rem
    font-size: $buttonTextSize * 1.25

    @include media-queries-down(sm)
      width: auto

  &-small
    padding: .25rem .5rem
    font-size: map-get($fontSizes, "small") !important

    :deep(i)
      margin-right: .25rem
      font-size: map-get($fontSizes, "small") !important

  // color variations
  @mixin buttonVariant ($background)
    color: colorContrast($background)

    @if $buttonOutlined
      border: .25rem solid $background
      background: transparent

      &:hover
        border: .25rem solid darken($background, 15%)
    @else
      background: $background

    &:hover
      background: darken($background, 15%)

    :deep(i)
      color: colorContrast($background) !important

  @each $color, $value in $themeColors
    &-#{$color}
      @include buttonVariant($value)
</style>
