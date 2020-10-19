<template>
  <div>
    <command-list :commands='commands' />
  </div>
</template>

<script>
import CommandList from '../components/CommandList'

import { searchCommands } from '../actions'

// TODO VUEX STORE

export default {
  props: {
    searchText: String
  },
  components: { CommandList },
  data () {
    return {
      isDetailView: true,
      selectedCommand: null
    }
  },
  watch: {
    searchText: function (text) {
      if (text) {
        this.handleSearch(text)
      }
    }
  },
  async created () {
    this.$store.dispatch('commands/fetchCommands')
  },
  methods: {
    async handleSearch (text) {
      if (!text) {
        this.getCommands()
        return
      }
      if (!text.trim().length) {
        return
      }
      this.commands = await searchCommands(text)
      this.selectedCommand = null
    }
  },
  computed: {
    commands: {
      get () {
        return this.$store.state.commands.commandsData
      },
      set (val) {
        this.$store.commit('commands/updateCommands', val)
      }
    }
  }
}
</script>
