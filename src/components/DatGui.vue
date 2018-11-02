<template>
  <div ref='container'>
    <slot></slot>
  </div>
</template>
<script>
import datgui from 'dat.gui'
export default {
  name: 'DatGui',
  data () {
    return {
      context: {}
    }
  },
  provide () {
    return {
      context: this.context
    }
  },
  created () {
    this.$_gui = new datgui.GUI({ autoPlace: false })
  },
  mounted () {
    this.$refs.container.appendChild(this.$_gui.domElement)
  },
  beforeDestroy () {
    this.$_gui && this.$_gui.destroy()
  }
}
</script>

<style scoped>
</style>

