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
    }
  },
  computed: {
    commands: {
      get () {
        return this.$store.state.commands.commandsData
      }
    }
  }
}
</script>
