import {createStore, createLogger} from 'vuex'
import form from './modules/form'
import page from './modules/page'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    page,
    form
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
