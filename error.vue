<template>
  <NuxtLayout>
    <div class="error">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="d1">
              {{ error.statusCode }}
            </h1>

            <h4>
              {{ error.message }}
            </h4>

            <Button
                :text="$t('backHome')"
                type="secondary"
                @click="handleError"
            />
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const props = defineProps({
  error: Object,
});

const error = useError();
if (error.value.statusCode === 404 || '404') {
  error.value.message = 'Oops! Stránka nebyla nenalezena 😔';
}

const handleError = () => clearError({ redirect: '/' });
</script>

<style lang="sass" scoped>
.error
  position: absolute
  height: 100%
  width: 100%
  color: map-get($themeColors, "white")
  background: linear-gradient(-90deg, rgba(16,16,40,1) 0%, rgba(91,50,154,1) 40%, rgba(231,174,5,1) 100%)
  z-index: 0

  .container .row
    display: flex
    flex-direction: column
    justify-content: center
    text-align: center
    min-height: 100vh

  h1
    color: map-get($themeColors, "secondary")

  h4
    padding: 2rem 0 1rem
</style>
