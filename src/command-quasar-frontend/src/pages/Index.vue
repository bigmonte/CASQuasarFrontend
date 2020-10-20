<template>
  <div>
    <command-list :commands='commands' />
  </div>
</template>

<script>
import CommandList from '../components/CommandList'

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
    this.$store.dispatch('commands/fetchCommands')
  },
  methods: {
    async handleSearch (text) {
      if (!text) {
        this.searchingCommands = false
        return
      }
      if (!text.trim().length) {
        this.searchingCommands = false
        return
      }
      this.$store.dispatch('commands/fetchSearchData')
      this.searchingCommands = true
      this.selectedCommand = null
    }
  },
  computed: {
    searchingCommands: {
      get () {
        return this.$store.state.commands.searching
      },
      set (val) {
        this.$store.commit('commands/updateSearching', val)
      }
    },
    commands: {
      get () {
        if (this.searchingCommands) return this.$store.state.commands.searchData
        return this.$store.state.commands.commandsData
      },
      set (val) {
        if (!this.searchingCommands) this.$store.commit('commands/updateCommands', val)
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
