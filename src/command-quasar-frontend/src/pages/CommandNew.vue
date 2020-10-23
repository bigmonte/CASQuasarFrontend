<script>
import CommandForm from '../components/commands/CommandForm'

export default {
  components: { CommandForm },
  beforeUnmount () {
    this.clearAlertTimeout()
  },
  methods: {
    async submitCreateForm (commandToCreate) {
      this.$store.dispatch('commands/createCommand', commandToCreate)
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
