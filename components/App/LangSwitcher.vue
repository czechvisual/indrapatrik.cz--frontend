<template>
  <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="langSwitcher">
    {{ locale.name }}
  </nuxt-link>
</template>

<script setup>
import {useLang} from "~/composable/useLang";

const { locale, locales, switchLocalePath } = useLang()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
</script>
