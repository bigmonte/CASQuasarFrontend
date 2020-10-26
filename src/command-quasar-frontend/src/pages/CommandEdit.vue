<script>
import CommandForm from '../components/commands/CommandForm'

export default {
  components: { CommandForm },
  computed: {
    command: {
      get () { return this.$store.getters['commands/getCommandWithId'](this.$route.params.id) }
    }
  },
  data () {
    return {
      formTitle: 'Edit Command'
    }
  },
  beforeMount () { // Todo use beforeEnterRoute?
    if (this.command === null) {
      this.$router.push('/404')
    }
  },
  methods: {
    async onFormSubmit (command) {
      if (this.command.isEqual(command)) {
        this.$store.dispatch('logger/addMessage', { message: 'No changes detected when editing Command!!', isError: true })
        return
      }
      await this.$store.dispatch('commands/updateCommand', command)
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
