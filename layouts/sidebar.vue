<template>
  <div>
    <AppHeader
        @showMobileMenu="showMobileMenu = true"
        v-show="!showMobileMenu" />
    <AppMobileMenu
        v-show="showMobileMenu"
        @closeMobileMenu="showMobileMenu = false" />
    <slot />
  </div>
</template>


<script>
export default {
  data () {
    return {
      showMobileMenu: false
    }
  }
}
</script>

<style lang="sass">
*,
*::before,
*::after
  box-sizing: border-box
  margin-bottom: inherit

*,
*:focus,
*:active
  outline: none

html
  font-family: $fontDefault
  overflow-x: hidden
  scroll-behavior: smooth

body
  padding: 0
  margin: 0
  background: $pageBg
  color: $bodyColor
  overflow-x: hidden
  white-space: normal

img,
iframe
  max-width: 100%
  vertical-align: middle
  border: 0
</style>
