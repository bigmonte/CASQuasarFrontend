import Vue from 'vue'
import Vuex from 'vuex'
import commands from './commands'
// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      commands
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  if (process.env.DEV && module.hot) {
    module.hot.accept(['./commands'], () => {
      const newCommands = require('./commands').default
      Store.hotUpdate({ modules: { commands: newCommands } })
    })
  }

  return Store
}
