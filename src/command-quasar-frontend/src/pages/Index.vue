<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
    <ul>
      <li v-for="command in commands" :key="command.id">
        {{ command.id }} - {{ command.platform }}
      </li>
    </ul>
  </q-page>
</template>

<script>
import { fetchCommands } from '../actions'
export default {
  name: 'PageIndex',
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
