<template>
    <div class="q-ma-sm"
      v-if="isDetailView">
        <div v-for="command in commands" :key="command.id" class="q-py-md">
          <q-card class=" text-white"
                  style="background: linear-gradient(45deg, #486678, #343434)">
              <q-card-section >
              <div class="row">
                <div class="col">
                  <div class="text-h6 text-white q-ml-sm">{{command.howTo}}</div>
                  <div class="text text-white q-ml-sm">{{command.platform}}</div>
                  <div class="text text-green q-ml-sm q-mt-md">
                    <code>{{command.commandLine}}</code>
                  </div>
                </div>
                <div class="col-xl">
                  <q-btn flat round dense
                    @click="onEditButtonClicked(command)">
                    <q-icon name="more_vert"></q-icon></q-btn></div>
              </div>
            </q-card-section>
            <!-- <q-card-actions>
              <q-btn type="update" color="primary"
                @click="onEditButtonClicked(command)">Edit command</q-btn>
            </q-card-actions> -->
          </q-card>
        </div>
  </div>
  <command-edit
    v-else
    :command="activeCommand"
    @on-command-update="refreshCommand"
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
    onEditButtonClicked (selectedCommand) {
      this.selectCommand(selectedCommand)
      this.toggleView()
    },
    selectCommand (selectedCommand) {
      this.selectedCommand = selectedCommand
    },
    toggleView () {
      console.log('toggle view')
      this.isDetailView = !this.isDetailView
    },
    refreshCommand (newCommand) {
      const index = this.commands.findIndex(r => r.id === newCommand.id)
      this.commands[index] = newCommand
      this.selectedCommand = newCommand
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
