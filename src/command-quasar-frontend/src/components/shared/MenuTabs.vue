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
      if ('name' in this.$route) {
        if (this.$route.name === 'root') this.addRoute = `${this.currentRoute}New`
        if (this.$route.name === 'commands') this.addRoute = `${this.currentRoute}New`
        if (this.$route.name === 'snippets') this.addRoute = `${this.currentRoute}New`
        // return `${this.$route.name}New`
        return this.addRoute
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
