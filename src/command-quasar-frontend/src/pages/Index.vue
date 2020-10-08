<template>
<command-list
  :commands="commands"/>
</template>

<script>
import CommandList from '../components/CommandList'
import { fetchCommands } from '../actions'

export default {
  components: { CommandList },
  data () {
    return {
      isDetailView: true,
      selectedCommand: null,
      commands: []
    }
  },
  async created () {
    const commands = await fetchCommands()
    this.commands = commands
  }
}
</script>
