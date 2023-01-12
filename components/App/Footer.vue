<template>
  <div
      id="footer"
      class="footer"
  >
    <div class="wrap">
      <p>
        © 2022 Saroli s.r.o. | Patrik Indra | Created by

        <a href="https://czechvisual.cz/">
          <nuxt-img
              preload
              class="logo"
              src="/img/czechvisual_logo.svg"
              sizes="sm:100vw md:100vw lg:100vw"
              quality="70"
              format="webp"
              loading="lazy"
          />
        </a>
      </p>
    </div>
  </div>
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
.footer
  @include flex($direction: column, $justify: flex-start, $align: center)

  bottom: 0
  left: 0
  position: absolute
  width: 100%
  margin: 0
  background: linear-gradient(-90deg, rgba(16,16,40,1) 0%, rgba(91,50,154,1) 40%, rgba(231,174,5,1) 100%)
  z-index: -1
  transition: all .3s ease-in-out

  .wrap
    @include flex ($direction: row, $justify: flex-start, $align: center)

    flex-wrap: wrap
    width: 100%
    height: 100%
    padding: 0 1rem

    @include media-queries-up(lg)
      width: $wrap

    p
      margin-bottom: 0
      padding: 1rem 0
      color: map-get($themeColors, "white")

      a
        margin-bottom: .5rem
        padding-left: .25rem

        img.logo
          height: 1rem
</style>
