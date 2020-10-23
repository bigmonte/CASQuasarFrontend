<script>
import Search from './Search'
export default {
  components: { Search },
  data () {
    return {
      tab: 'commands',
      currentRoute: 'commands' // default
    }
  },
  methods: {
    getAddRoute () {
      if ('name' in this.$route) {
        if (this.$route.name === 'commands') this.currentRoute = this.$route.name
        if (this.$route.name === 'snippets') this.currentRoute = this.$route.name
        return `${this.currentRoute}New`
      }
    }
  },
  computed: {
    canShowSearchOrAdd: {
      get () {
        if ('name' in this.$route) {
          return (this.$route.name === 'commands' || this.$route.name === 'snippets')
        }
        return false
      }
    }
  }
}
</script>

<template>
  <q-tabs shrink>
    <search
      v-if="canShowSearch"/>
    <router-link
      v-if="canShowSearchOrAdd"
      :to="{ name: `${getAddRoute()}` }" class="q-btn flat round dense">
      <q-icon name="add" color="white"></q-icon>
    </router-link>
    <q-tabs>
      <q-route-tab
        label="Commands"
        to="/commands"
        exact/>
      <q-route-tab
        label="Snippets"
        to="/snippets"
        exact/>
    </q-tabs>
  </q-tabs>
</template>
