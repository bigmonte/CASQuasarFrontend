<template>
  <q-layout view="lHh Lpr lFf" style="background-color: #3a4959">
    <q-header elevated>
      <q-toolbar class="bg-primary text-white">
        <q-toolbar-title>
          <router-link class="q-btn flat" :to="{ name: 'root' }">
            Commands and Snippets
          </router-link></q-toolbar-title >
        <menu-tabs/>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view/>
    </q-page-container>
    <q-footer>
      <q-banner inline-actions class="text-white bg-primary">
        <logger-list/>
        <template v-slot:action>
          <q-btn flat color="white" label="Hide"></q-btn>
        </template>
      </q-banner>
    </q-footer>
  </q-layout>
</template>
<script>
import MenuTabs from '../components/shared/MenuTabs'
import LoggerList from '../components/logger/LoggerList'

export default {
  name: 'MainLayout',
  components: { MenuTabs, LoggerList },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    handleTextClicked (text) {
      this.text = text
    }
  },
  computed: {
    currentMessage: {
      get () {
        return this.$store.state.logger.currentMessage
      }
    }
  }
}
</script>
