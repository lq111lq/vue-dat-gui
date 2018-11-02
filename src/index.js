import DatGui from './components/DatGui.vue'
import DatValue from './components/DatValue.vue'
import DatFolder from './components/DatFolder.vue'
import DatColor from './components/DatColor.vue'

export default {
  version: '0.0.1',
  install (Vue, options) {
    Vue.component('dat-gui', DatGui)
    Vue.component('dat-value', DatValue)
    Vue.component('dat-folder', DatFolder)
    Vue.component('dat-color', DatColor)
  }
}
