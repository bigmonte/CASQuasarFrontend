<template>
    <div class="q-ma-sm"
      v-if="isDetailView">
        <div v-for="command in commands" :key="command.id" class="q-py-md">
          <command-list-item
            :command='command'
            @on-edit-clicked="onEditButtonClicked"/>
        </div>
  </div>
  <command-edit
    v-else
    :command="selectedCommand"
    @on-back-clicked="toggleView"/>
</template>

<script>
import CommandListItem from './CommandListItem'
import CommandEdit from './CommandEdit'

export default {
  name: 'CommandList',
  components: { CommandListItem, CommandEdit },
  data () {
    return {
      selectedCommand: null,
      isDetailView: true
    }
  },
  methods: {
    onEditButtonClicked (command) {
      this.selectedCommand = command
      this.toggleView()
    },
    toggleView () {
      this.isDetailView = !this.isDetailView
    },
    async handleSearch (text) {
      if (this.canSearch) {
        this.$store.dispatch('commands/fetchSearchData')
        this.searchingCommands = true
        this.selectedCommand = null
      }
    }
  },
  watch: {
    searchText: function (text) {
      this.handleSearch(text)
    }
  },
  async created () {
    await this.$store.dispatch('commands/fetchCommands')
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
