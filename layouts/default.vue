<template>
  <div>
    <AppHeader
        @showMobileMenu="showMobileMenu = true"
        v-show="!showMobileMenu" />
    <AppMobileMenu
        v-show="showMobileMenu"
        @closeMobileMenu="showMobileMenu = false" />
    <slot />
    <AppFooter />
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
  font-family: $fontDefault
  overflow-x: hidden
  white-space: normal

img,
iframe
  max-width: 100%
  vertical-align: middle
  border: 0

.page-enter-active,
.page-leave-active
  transition: all .3s

.page-enter-from,
.page-leave-to
  opacity: .5
</style>
