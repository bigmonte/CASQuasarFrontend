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
      isDetailView: true
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
      this.$store.dispatch('logger/addMessage', 'Fetching commands from API', false)
    } catch (error) {
      this.$store.dispatch('logger/addMessage', error, true)
    }
  },
  methods: {
    async handleSearch (text) {
      if (this.canSearch) {
        try {
          this.$store.dispatch('commands/fetchSearchData')
          this.$store.dispatch('logger/addMessage', `Search request: ${text}`, false)
        } catch (error) {
          this.$store.dispatch('logger/addMessage', error, true)
        }
      }
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
