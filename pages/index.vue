<template>
  <div>
    <HeroSingle
        image="v1668709997/test_03_kwtxma.jpg"
        :title="$t('hero.title')"
        :description="$t('hero.description')"
        :button="$t('hero.button')"
    />

    <Alert
        title="Pozor nová výstražná zpráva"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil."
        type="negative"
    />

    <div class="container">
      <div class="row">
        <ContactForm />
      </div>
    </div>

    <div class="container">
      <div class="row">
        <BlogItem
            v-for="(item, index) in tm('blogs')"
            :key="index"
            :image="rt(item.image)"
            :title="rt(item.title)"
            :description="rt(item.description)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import {useLang} from "~/composable/useLang";

const { tm, rt } = useLang()
</script>

<style lang="sass" scoped>
.blogItems
  @include flex ($direction: column, $justify: space-between, $align: center)

  flex-wrap: wrap
  gap: 1rem
  margin: 0 auto
  padding: 1rem

  @include media-queries-up(lg)
    @include flex ($direction: row, $justify: space-between, $align: center)

    flex-wrap: wrap
    gap: 1rem
    padding: 1rem 0
    max-width: $wrap
</style>
