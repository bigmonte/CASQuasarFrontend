<script>
import CommandForm from './CommandForm'

export default {
  props: {
    command: {
      type: Object
    }
  },
  components: { CommandForm },
  emits: ['on-back-clicked'],
  data () {
    return {
      formTitle: 'Edit Command'
    }
  },
  methods: {
    async onFormSubmit (command) {
      try {
        if (this.command.isEqual(command)) { // TODO make it simpler
          this.$store.dispatch('logger/addMessage', 'No changes detected!', true)
          return
        }
        await this.$store.dispatch('commands/updateCommand', command)
        this.$store.dispatch('logger/addMessage', `Command Edited: id-${command.id}`, false)
      } catch (error) {
        this.$store.dispatch('logger/addMessage', error, true)
      }
    },
    onBackClicked () {
      this.$emit('on-back-clicked')
    }
  }
}
</script>

<template>
<command-form
    :command="command"
    :formTitle="formTitle"
    @on-form-submit="onFormSubmit($event)"
    @on-back-clicked="onBackClicked"/>
</template>
