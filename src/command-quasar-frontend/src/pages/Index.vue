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
      if (this.$store.getters['commands/canSearch']) {
        this.$store.dispatch('commands/fetchSearchData')
        this.searchingCommands = true
        this.selectedCommand = null
      }
    }
  },
  computed: {
    commands: {
      get () {
        if (this.$store.getters['commands/canSearch']) return this.$store.state.commands.searchData
        return this.$store.state.commands.commandsData
      },
      set (val) {
        if (!this.$store.getters['commands/canSearch']) this.$store.commit('commands/updateCommands', val)
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
