<template>
  <div>
    <command-list :commands='commands' />
  </div>
</template>

<script>
import CommandList from '../components/CommandList'

import { fetchCommands, searchCommands } from '../actions'

// TODO VUEX STORE

export default {
  props: {
    searchText: String
  },
  components: { CommandList },
  data () {
    return {
      isDetailView: true,
      selectedCommand: null,
      commands: []
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
    const commands = await fetchCommands()
    this.commands = commands
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
  }
}
</script>
