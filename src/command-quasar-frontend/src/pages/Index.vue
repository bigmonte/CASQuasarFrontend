<template>
  <div>
    <command-list/>
  </div>
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
    this.$store.dispatch('commands/fetchCommands')
  },
  methods: {
    async handleSearch (text) {
      if (this.canSearch) {
        this.$store.dispatch('commands/fetchSearchData')
        this.searchingCommands = true
        this.selectedCommand = null
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
