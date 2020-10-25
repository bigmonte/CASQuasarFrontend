<template>
  <command-list
    v-if="this.commands.length > 0"
    :commands="commands">
  </command-list>
  <div
        class="text-h6 text-white text-center q-pa-xl"
        v-else>No commands to show
  </div>
</template>

<script>
import CommandList from '../components/commands/CommandList'

export default {
  components: { CommandList },
  props: {
    platform: {
      type: String
    }
  },
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
    this.$store.dispatch('commands/fetchCommandsWithPlatform', this.$route.params.platform)
  },
  methods: {
    async handleSearch (text) {
      if (this.canSearch) {
        this.$store.dispatch('commands/fetchSearchData')
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
        return this.$store.state.commands.commandsToShow
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
