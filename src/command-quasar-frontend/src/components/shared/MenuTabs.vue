<script>
export default {
  data () {
    return {
      searchText: '',
      tab: 'commands'
    }
  },
  watch: {
    searchText: function (text) {
      this.setSearchText(text)
    }
  },
  methods: {
    setSearchText (text) {
      this.$store.commit('commands/updateSearchText', text)
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
    <router-link :to="{ name: 'CommandNew' }" class="q-btn flat round dense">
      <q-icon name="add" color="white"></q-icon>
    </router-link>
    <q-tabs v-model="tab">
      <q-tab name="commands" label="Commands"></q-tab>
      <q-tab name="snippets" label="Snippets"></q-tab>
    </q-tabs>
  </q-tabs>
</template>
