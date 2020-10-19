<script>
import CommandForm from '../components/CommandForm'
import { createCommandRequest } from '../actions'

export default {
  components: { CommandForm },
  data () {
    return {
      commandForm: { howTo: '', commandLine: '', platform: '' }
    }
  },
  beforeUnmount () {
    this.clearAlertTimeout()
  },
  methods: {
    async submitCreateForm (commandToCreate) {
      console.log('submiting new command')
      try {
        await createCommandRequest(commandToCreate)
        // this.setAlert('success', 'Command created!')
        this.$router.push({ name: 'root' })
      } catch (error) {
        console.log('error creating command')
        // this.setAlert('error', error?.message)
      }
    }
  }
}
</script>

<template>
  <command-form
    :formTitle="`${'Add command'}`"
    @on-form-submit="submitCreateForm($event) "
    @on-back-clicked="$router.go(-1)" />
</template>
