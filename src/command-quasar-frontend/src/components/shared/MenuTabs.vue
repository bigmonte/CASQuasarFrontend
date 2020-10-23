<script>
export default {
  data () {
    return {
      searchText: '',
      tab: 'commands',
      currentRoute: 'commands' // default
    }
  },
  watch: {
    searchText: function (text) {
      this.setSearchText(text)
    }
  },
  methods: {
    setSearchText (text) {
      if (this.currentRoute === 'commands') {
        this.$store.commit('commands/updateSearchText', text)
      }
      if (this.currentRoute === 'snippets') {
        this.$store.commit('snippets/updateSearchText', text)
      }
    },
    getAddRoute () {
      // A bit hacky in order to reuse currentRoute to set the search text (root defaults to commands search for now)
      // we also want to filter other routes (currentRoute only can be 'top level' route)

      if ('name' in this.$route) {
        if (this.$route.name === 'root') this.currentRoute = 'commands'
        if (this.$route.name === 'commands') this.currentRoute = this.$route.name
        if (this.$route.name === 'snippets') this.currentRoute = this.$route.name

        return `${this.currentRoute}New`
      }
    }
  }
}
</script>

<template>
  <q-tabs shrink>
    <q-input
      dark
      borderless
      v-model="searchText"
      input-class="text-right"
      class="q-ml-md"
    >
      <template v-slot:append>
        <q-icon v-if="searchText === ''" name="search"></q-icon>
        <q-icon
          v-else
          name="clear"
          class="cursor-pointer"
          @click="setSearchText('')"
        ></q-icon>
      </template>
      <q-space />
    </q-input>
    <router-link :to="{ name: `${getAddRoute()}` }" class="q-btn flat round dense">
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
