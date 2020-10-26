<script>
import CommandForm from '../components/commands/CommandForm'

export default {
  components: { CommandForm },
  data () {
    return {
      formTitle: 'Edit Command'
    }
  },
  methods: {
    async onFormSubmit (command) {
      if (this.command.isEqual(command)) { // TODO make it simpler
        this.$store.dispatch('logger/addMessage', { message: 'No changes detected when editing Command!!', isError: true })
        return
      }
      await this.$store.dispatch('commands/updateCommand', command)
    }
  },
  computed: {
    command: {
      get () {
        return this.$store.getters['commands/getCommandWithId'](this.$route.params.id)
      }
    }
  }
}
</script>

<template>
<command-form
    :command="command"
    :formTitle="formTitle"
    @on-form-submit="onFormSubmit($event)"/>
</template>
