<template>
  <command-list
    :commands="commands"></command-list>
</template>

<script>
import CommandList from '../components/commands/CommandList'

export default {
  components: { CommandList },
  data () {
    return {
      isDetailView: true,
      selectedCommand: null
    }
  },
  watch: {
    searchText: function (text) {
      this.handleSearch(text)
    }
  },
  async created () {
    try {
      this.$store.dispatch('commands/fetchCommands')
      this.addLoggerMessage('Fetching commands from API', false)
    } catch (error) {
      this.addLoggerMessage(error, true)
    }
  },
  methods: {
    async handleSearch (text) {
      if (this.canSearch) {
        try {
          this.$store.dispatch('commands/fetchSearchData')
          this.selectedCommand = null
          this.addLoggerMessage(`Search request: ${text}`, false)
        } catch (error) {
          this.addLoggerMessage(error, true)
        }
      }
    },
    addLoggerMessage (message, isError) {
      const sampleLog = { message: message, isError: isError }
      this.$store.commit('logger/addMessage', sampleLog)
    }
  },
  computed: {
    canSearch: {
      get () {
        return this.$store.getters['commands/canSearch']
      }
    },
    commands: {
      get () {
        if (this.canSearch) return this.$store.state.commands.searchData
        return this.$store.state.commands.commandsData
      },
      set (val) {
        if (!this.canSearch) this.$store.commit('commands/updateCommands', val)
      }
    },
    searchText: {
      get () {
        return this.$store.state.commands.searchText
      }
    }
  }
}
</script>
