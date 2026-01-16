import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import Icon from './components/Icon.vue'
import 'flag-icons/css/flag-icons.min.css'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {
    app.component('Icon', Icon)
  }
}
