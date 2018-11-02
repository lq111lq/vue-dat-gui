<template>
  <span></span>
</template>
<script>
export default {
  name: 'DatColor',
  props: {
    value: {
      type: [String, Array, Object]
    },
    label: {
      type: String
    }
  },
  inject: ['context'],
  computed: {
    valueInner () {
      return this.context && this.context[this.label]
    }
  },
  watch: {
    value (value) {
      this.$_controller && this.$_controller.setValue(value)
    },
    valueInner (newVal) {
      this.$emit('input', newVal)
    }
  },
  created () {
    this.$set(this.context, this.label, this.value)
    this.$_controller = this.$parent.$_gui.addColor(this.context, this.label)
  }
}
</script>