<template>
  <header
      id="header"
      class="header"
  >
    <div class="wrap">
      <nuxt-link to="/">
        <AppLogo negative />
        <span>
          Patrik Indra
        </span>
      </nuxt-link>

      <Icon name="tabler:menu" class="navIcon" @click="showMobileMenu" />

      <AppNavItems />
    </div>
  </header>
</template>

<script>
export default  {
  methods: {
    showMobileMenu () {
      this.$emit('showMobileMenu')
    }
  },
}
</script>

<style lang="sass" scoped>
$headerBackgroundColor: transparent

// Mobile
$headerMobileNavIconColor: map-get($themeColors, "primary")

.header
  @include flex($direction: column, $justify: flex-start, $align: center)

  top: 0
  left: 0
  position: absolute
  height: 5rem
  width: 100%
  margin: 0
  padding: 2rem 1rem
  background: $headerBackgroundColor
  z-index: 10
  transition: all .3s ease-in-out

  .wrap
    @include flex ($direction: row, $justify: space-between, $align: center)

    flex-wrap: wrap
    width: 100%
    height: 100%

    @include media-queries-up(lg)
      width: $wrap

    a
      @include flex ($direction: row, $justify: flex-start, $align: center)

      text-decoration: none

      span
        margin-left: 1rem
        padding: .25rem .25rem .25rem 1rem
        border-left: 2px solid map-get($themeColors, "white")
        color: map-get($themeColors, "white")
        font-size: 1.2rem

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
