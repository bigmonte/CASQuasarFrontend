<template>
    <div class="q-ma-sm"
      v-if="isDetailView">
        <div v-for="command in commands" :key="command.id" class="q-py-md">
          <command-list-item
            :command='command'
            @on-edit-clicked="onEditButtonClicked"
            @on-command-delete="refreshDeletedCommandViewData($event)"/>
        </div>
  </div>
  <command-edit
    v-else
    :command="activeCommand"
    @on-command-update="refreshCommand"
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
  props: {
    commands: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onEditButtonClicked (selectedCommand) {
      this.selectCommand(selectedCommand)
      this.toggleView()
    },
    selectCommand (selectedCommand) {
      this.selectedCommand = selectedCommand
    },
    toggleView () {
      this.isDetailView = !this.isDetailView
    },
    refreshCommand (newCommand) {
      const index = this.commands.findIndex(r => r.id === newCommand.id)
      this.commands[index] = newCommand
      this.selectedCommand = newCommand
    },
    refreshDeletedCommandViewData (deletedCommand) {
      const index = this.commands.findIndex(r => r.id === deletedCommand.id)
      this.commands.splice(index, 1)
      this.selectCommand(this.commands[0] || null)
    }
  },
  computed: {
    // revaluated each time reactive dependency change
    commandsAreNotEmpty () { return this.commandsLength > 0 },
    activeCommand () {
      return this.selectedCommand || (this.commandsAreNotEmpty && this.commands[0]) || null
    }
  }
}
</script>
