<template>
  <div class="inputContainer" :disabled="disabled">
    <label
        v-if="slots.label"
        :for="name"
        class="inputLabel"
    >
      <slot name="label" />
    </label>

    <div class="inputWrapper">
      <textarea
          v-if="textarea"
          :id="name"
          :name="name"
          :value="value"
          :placeholder="placeholder"
          rows="4"
          :class="`input ${selectedSize} ${selectedFontSize}`"
          :required="required"
      />

      <input
          v-else
          :id="name"
          :name="name"
          :value="value"
          :type="type"
          :placeholder="placeholder"
          :class="`input ${selectedSize} ${selectedFontSize}`"
          :required="required"
      />
    </div>
    <div
        v-if="slots.suffix"
        :class="`inputSuffix ${selectedSuffixType}`"
    >
      <slot name="suffix" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'md',
  },
  type: {
    type: String,
    default: 'default',
  },
  suffixType: {
    type: String,
    default: 'info'
  },
  textarea: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  }
})

const slots = useSlots()

const inputSize = reactive<{
  [key: string]: string
}>({
  xs: 'inputSize-xs',
  sm: 'inputSize-sm',
  md: 'inputSize-md',
  lg: 'inputSize-lg',
})

const fontSize = reactive<{
  [key: string]: string
}>({
  xs: 'inputLabelSize-xs',
  sm: 'inputLabelSize-sm',
  md: 'inputLabelSize-md',
  lg: 'inputLabelSize-lg',
})

const suffixType = reactive<{
  [key: string]: string
}>({
  info: 'inputSuffixType-info',
  positive: 'inputSuffixType-positive',
  warning: 'inputSuffixType-warning',
  alert: 'inputSuffixType-alert'
})

const selectedSize = computed(() => inputSize[props.size])
const selectedFontSize = computed(() => fontSize[props.size])
const selectedSuffixType = computed(() => suffixType[props.suffixType])
</script>

<style lang="sass" scoped>
// Input
$inputColor: rgba(map-get($themeColors, "gray"), .2)
$inputTextColor: map-get($themeColors, "typography")
$inputTextSize: map-get($fontSizes, "normal")
$inputTextWeight: map-get($fontWeights, "regular")
$inputRadius: .25rem

// Label
$inputLabelColor: map-get($themeColors, "typography")
$inputLabelSize: map-get($fontSizes, "normal")
$inputLabelWeight: map-get($fontWeights, "regular")

.input
  width: 100%
  padding: 1rem
  text-overflow: ellipsis
  color: $inputTextColor
  background: $inputColor
  border-radius: $inputRadius
  border: none

  &Container
    padding: 0 0 2rem

  &Wrapper
    padding: 1rem 0 .5rem

  @each $size, $value in $sizeVariants
    &Size-#{$size}
      padding: 1rem * $value
      font-size: $inputTextSize * $value

  &Label
    color: $inputLabelColor
    font-weight: $inputLabelWeight

    @each $size, $value in $sizeVariants
      &Size-#{$size}
        font-size: $inputLabelSize * $value

  &Suffix
    font-size: $inputLabelSize * .9
    font-weight: $inputLabelWeight
    opacity: .5

    @each $state, $value in $stateVariants
      &Type-#{$state}
        color: map-get($themeColors, $value)
</style>
