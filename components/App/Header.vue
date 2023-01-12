<template>
  <header
      id="header"
      class="header"
  >
    <div class="wrap">
      <nuxt-link to="/">
        <AppLogo />
      </nuxt-link>

      <Icon name="tabler:menu" class="navIcon" @click="showMobileMenu" />

      <AppNavItems />
    </div>
  </header>
</template>

<script>
import {useSticky} from "~/composable/useSticky";

const onScroll = useSticky()

export default  {
  methods: {
    showMobileMenu () {
      this.$emit('showMobileMenu')
    }
  },
}
</script>

<style lang="sass" scoped>
$headerBackgroundColor: map-get($themeColors, "white")
$headerShadow: false

// Mobile
$headerMobileNavIconColor: map-get($themeColors, "primary")

.header
  @include flex($direction: column, $justify: flex-start, $align: center)

  top: 0
  left: 0
  height: 5rem
  width: 100%
  margin: 0
  padding: 0 1rem
  background: $headerBackgroundColor
  z-index: 10
  transition: all .3s ease-in-out

  @if $headerShadow == true
    @include shadow(map-get($themeColors, "black"), .1)

  .wrap
    @include flex ($direction: row, $justify: space-between, $align: center)

    flex-wrap: wrap
    width: 100%
    height: 100%

    @include media-queries-up(lg)
      width: $wrap

  &Scroll
    position: fixed
    height: 3rem

    :deep(.logo svg)
      height: 1.5rem

  .navIcon
    font-size: 1.5rem
    color: $headerMobileNavIconColor
    cursor: pointer

    @include media-queries-up(lg)
      display: none

  .navigation
    @include flex ($direction: row, $justify: center, $align: flex-start)

    margin: 0
    padding: 0 1rem
    list-style: none
    overflow: hidden
    transition: all .3s ease-in-out

    @include media-queries-down(md)
      display: none
</style>
