<template>
  <ul class="navigation">
    <li>
      +420 775 265 640 | indra@saroli.cz | Stojanova 1334, Uh. Hradiště | Vavrečkova 7074, Zlín
    </li>
  </ul>
</template>

<style lang="sass" scoped>
$headerLinkColor: map-get($themeColors, "white")
$headerLinkSize: .825rem
$headerLinkWeight: map-get($fontWeights, "bold")

// Style border
$headerLinkBorder: .25rem solid transparent
$headerLinkBorderSide: top
$headerLinkBorderHover: .25rem solid map-get($themeColors, "primary")

// Mobile
$headerLinkColorMobile: map-get($themeColors, "white")

li
  display: block
  padding: .5rem 1rem
  font-size: $headerLinkSize
  font-weight: $headerLinkWeight
  color: $headerLinkColor
  transition: all .6s ease-in-out

  @include media-queries-down(md)
    @include flex ($direction: column, $justify: space-between, $align: center)

    padding: .75rem 0
    font-size: $headerLinkSize * 1.5
    color: $headerLinkColorMobile
</style>
