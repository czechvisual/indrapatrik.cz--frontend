<template>
  <div class="mobileMenu">
    <Icon name="ic:sharp-close" class="closeIcon" @click="closeMobileMenu" />

    <AppNavItems />
  </div>
</template>

<script>
export default  {
  methods: {
    closeMobileMenu () {
      this.$emit('closeMobileMenu')
    }
  }
}
</script>

<style lang="sass" scoped>
$headerMobileNavBackgroundColor: map-get($themeColors, "primary")
$headerMobileNavIconColor: map-get($themeColors, "white")

.mobileMenu
  @include flex($direction: column, $justify: center, $align: center)

  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  padding: 0 1rem
  background: $headerMobileNavBackgroundColor
  z-index: 10
  transition: all .3s ease-in-out

  ul
    padding: 0 1rem
    text-align: center
    list-style: none
    transition: all .3s ease-in-out

  .closeIcon
    position: absolute
    top: 1.5rem
    right: 1.25rem
    font-size: 1.5rem
    color: $headerMobileNavIconColor
    cursor: pointer
</style>
