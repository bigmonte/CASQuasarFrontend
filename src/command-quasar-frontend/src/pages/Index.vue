<template>
    <div class="q-ma-xl">
      <q-scroll-area
        :visible=true
        style="height: 600px; max-width: 100%;"
      >
        <div v-for="command in commands" :key="command.id" class="q-py-md">
          <q-card class="my-card text-black">
              <q-card-section>
              <div class="text-h6 text-blue">{{command.howTo}}</div>
              <div class="text text-green">Platform: {{command.platform}}</div>
              <div class="text text-right">
              <code>{{command.commandLine}}</code>
              </div>
            </q-card-section>
            <q-card-actions>
              <q-btn flat>Edit</q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </q-scroll-area>
  </div>
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

<style lang="sass" scoped>
  .my-card
    width: 100%
    max-width: 70%
</style>
