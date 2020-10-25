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
      if (this.command.isEqual(command)) { // TODO make it simpler
        this.$store.dispatch('logger/addMessage', { message: 'No changes detected when editing Command!!', isError: true })
        return
      }
      await this.$store.dispatch('commands/updateCommand', command)
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
