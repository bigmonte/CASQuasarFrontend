<script>
import CommandForm from './CommandForm'
import { updateCommandRequest } from '../actions'
export default {
  props: {
    command: {
      type: Object
    }
  },
  components: { CommandForm },
  emits: ['on-back-clicked', 'on-command-update'],
  data () {
    return {
      formTitle: 'Edit Command'
    }
  },
  methods: {
    async onFormSubmit (command) {
      console.log(command.id)
      try {
        const updatedCommand = await updateCommandRequest(command.id, command)
        this.$emit('on-command-update', updatedCommand)
      } catch (error) {
        //  this.setAlert('error', error?.message)
        console.log('error')
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
