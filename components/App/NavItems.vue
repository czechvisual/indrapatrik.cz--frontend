<template>
  <ul class="navigation">
    <li
        v-for="(item, index) in tm('navItems')"
        :key="index"
    >
      <nuxt-link :to="localePath(rt(item.route))">
        {{ rt(item.title) }}
      </nuxt-link>
    </li>

    <li>
      <AppLangSwitcher />
    </li>
  </ul>
</template>

<script setup>
import {useLang} from "~/composable/useLang";

const { tm, rt, localePath } = useLang()
</script>

<style lang="sass" scoped>
$headerLinkStyle: background  // border, background
$headerLinkBackground: transparent
$headerLinkBackgroundHover: rgba(map-get($themeColors, "primary"), .2)
$headerLinkColor: map-get($themeColors, "primary")
$headerLinkColorHover: map-get($themeColors, "primary")
$headerLinkSize: 1rem
$headerLinkWeight: map-get($fontWeights, "regular")
$headerLinkTransform: none
$headerLinkRadius: .5rem

// Style border
$headerLinkBorder: .25rem solid transparent
$headerLinkBorderSide: top
$headerLinkBorderHover: .25rem solid map-get($themeColors, "primary")

// Mobile
$headerLinkColorMobile: map-get($themeColors, "white")

li a,
:deep(.langSwitcher)
  display: block
  padding: .5rem 1rem
  font-size: $headerLinkSize
  font-weight: $headerLinkWeight
  color: $headerLinkColor
  background: $headerLinkBackground
  text-transform: $headerLinkTransform
  text-decoration: none
  transition: all .6s ease-in-out

  @if $headerLinkStyle == border
    #{'border'}-#{$headerLinkBorderSide}: $headerLinkBorder

    &:hover,
    &.router-link-active,
    &.router-link-exact-active
      color: $headerLinkColorHover
      #{'border'}-#{$headerLinkBorderSide}: $headerLinkBorderHover

  @if $headerLinkStyle == background
    margin: 0 .15rem
    background: $headerLinkBackground
    border-radius: $headerLinkRadius

    &:hover,
    &.router-link-active,
    &.router-link-exact-active
      color: $headerLinkColorHover
      background: $headerLinkBackgroundHover

  @include media-queries-down(md)
    @include flex ($direction: column, $justify: space-between, $align: center)

    padding: .75rem 0
    font-size: $headerLinkSize * 1.5
    color: $headerLinkColorMobile

:deep(.langSwitcher)
  background: rgba($headerLinkColor, .1)

  @include media-queries-down(md)
    background: rgba($headerLinkColorMobile, .1)
</style>
