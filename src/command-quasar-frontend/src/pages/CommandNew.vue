<script>
import CommandForm from '../components/commands/CommandForm'

export default {
  components: { CommandForm },
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
    @on-form-submit="submitCreateForm($event)"/>
</template>
