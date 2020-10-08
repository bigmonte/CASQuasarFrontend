<template>
    <div class="q-ma-xl"
      v-if="isDetailView">
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
              <q-btn flat
                @click="toggleView">Edit</q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </q-scroll-area>
  </div>
  <command-edit
    v-else
    :command="activeCommand"
    @on-back-clicked="toggleView"/>
</template>

<script>
import CommandEdit from './CommandEdit'
export default {
  name: 'CommandList',
  components: { CommandEdit },
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
    selectCommand (selectedCommand) {
      this.selectedCommand = selectedCommand
    },
    toggleView () {
      console.log('toggle view')
      this.isDetailView = !this.isDetailView
    }
  },
  computed: {
    commandsLength () {
      // revaluated each time reactive dependency change
      return this.commands.length
    },
    toggleBtnClass () {
      return this.isDetailView ? 'btn-warning' : 'btn-primary'
    },
    commandsAreNotEmpty () { return this.commandsLength > 0 },
    activeCommand () {
      return this.selectedCommand || (this.commandsAreNotEmpty && this.commands[0]) || null
    }
  }
}
</script>

<style lang="sass" scoped>
  .my-card
    width: 100%
    max-width: 70%
</style>
