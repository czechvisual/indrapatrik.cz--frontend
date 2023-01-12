<template>
  typeof error.statusCode =
  <span v-html="`${typeof error.statusCode}`"> </span>
  <hr />

  <p>
    error.statusCode: {{ error.statusCode }} <br />
    error.message: {{ error.message }}
  </p>
  <hr />

  <h3>Custom 404 message</h3>
  <p v-if="error.statusCode === 404 || '404'">
    [template]: Oops page not available 🥺
  </p>

  <button @click="handleError">Clear errors</button>
</template>

<script setup>
const props = defineProps({
  error: Object,
});

const error = useError();
if (error.value.statusCode === 404 || '404') {
  error.value.message = '[script]: Oops! Page not found 😔';
}

const handleError = () => clearError({ redirect: '/' });
</script>

<style lang="sass" scoped>
.error
  @include media-queries-up(lg)
    color: map-get($themeColors, "primary")
</style>
