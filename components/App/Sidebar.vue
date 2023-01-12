<template>
  <div class="sidebar">
    <ul>
      <li v-for="item in menu" :key="item.id">
        <nuxt-link :to="item.href">
          {{ item.title }}
        </nuxt-link>

        <ul>
          <li v-for="item in item.submenu" :key="item.id">
            <nuxt-link :to="item.href">
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        {
          title: 'Getting started',
          href: '#getting-started',
          icon: "",
          submenu: [
            { title: 'Introduction', href: '#introduction' },
            { title: 'Install', href: '#install' },
            { title: 'Contents', href: '#contents' },
            { title: 'Nuxt', href: '#nuxt' },
            { title: 'Sass', href: '#sass' },
            { title: 'Variables', href: '#variables' }
          ]
        },
        {
          title: 'Layout',
          href: '#layout',
          submenu: [
            { title: 'Breakpoints', href: '#layout' },
            { title: 'Containers', href: '#containers' },
            { title: 'Grid', href: '#grid' },
            { title: 'Columns', href: '#columns' }
          ]
        },
        {
          title: 'Content',
          href: '#content',
          icon: "",
          submenu: [
            { title: 'Typography', href: '#typography' },
            { title: 'Images', href: '#images' },
            { title: 'Tables', href: '#tables' }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.sidebar
  padding: 1rem 2rem
  min-height: 100vh
  border-right: 2px solid rgba(map-get($themeColors, "primary"), .2)
  background: rgba(map-get($themeColors, "primary"), .05)

  ul
    margin: 0
    padding: .5rem 0 2rem
    list-style: none
    overflow: hidden
    transition: all .3s ease-in-out

    li
      padding: .25rem 0

      a
        display: inline-block
        padding: .25rem .5rem
        font-size: map-get($fontSizes, "normal")
        font-weight: map-get($fontWeights, "bold")
        color: map-get($themeColors, "typography")
        border-radius: .5rem
        text-decoration: none
        transition: all .6s ease-in-out

        &:hover,
        &:active
          background: rgba(map-get($themeColors, "primary"), .2)

      ul
        li a
          font-size: map-get($fontSizes, "small")
          font-weight: map-get($fontWeights, "regular")
</style>
