<template>
  <span></span>
</template>
<script>
export default {
  name: 'DatValue',
  props: {
    value: {
      type: [Number, String, undefined]
    },
    label: {
      type: String
    },
    max: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    acceptedValues: {
      type: [Object, Array],
      default () {
        return null
      }
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
    if (!this.value) {
      this.$set(this.context, this.label, () => {
        this.$emit('click')
      })
      this.$parent.$_gui.add(this.context, this.label)
      return
    }

    this.$set(this.context, this.label, this.value)
    if (this.acceptedValues) {
      this.$_controller = this.$parent.$_gui.add(this.context, this.label, this.acceptedValues)
    } else if (this.min !== this.max) {
      this.$_controller = this.$parent.$_gui.add(this.context, this.label, this.min, this.max)
    } else {
      this.$_controller = this.$parent.$_gui.add(this.context, this.label)
    }
  }
}
</script>