<script>
import { updateCommand } from '../actions'
export default {
  props: {
    command: {
      type: Object
    }
  },
  data () {
    return {
      uCommand: { ...this.command }
    }
  },
  emit: ['on-back-clicked', 'on-command-update'],
  methods: {
    handleClick: function () {
      this.$emit('on-back-clicked')
    },
    async onSubmit () {
      try {
        const updatedCommand = await updateCommand(this.uCommand.id, this.uCommand)
        this.$emit('on-command-update', updatedCommand)
        console.log(' submit ')
      } catch (error) {
        //  this.setAlert('error', error?.message)
        console.log('error')
      }
    }
  }
}
</script>
<template>
<div class="q-pa-md" style="max-width: 700px">
  <div class="text-h6 text-blue">Edit command</div>
<q-form
      class="q-gutter-md"
    >
      <q-input
        filled
        type="text"
        v-model="uCommand.howTo"
        label="How To"
      ></q-input>
      <q-input
        filled
        v-model="uCommand.commandLine"
        label="Command Line"
        hint="Command Line Interface associated with the command"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      ></q-input>
      <q-input
        filled
        type="text"
        v-model="uCommand.platform"
        label="Platform"
        hint="What is the platform being used for this command?"
      ></q-input>
      <div>
        <q-btn label="Update" type="update" color="primary" @click="onSubmit"></q-btn>
        <q-btn label="Back" type="back" color="secondary" flat class="q-ml-sm" @click="handleClick"></q-btn>
      </div>
    </q-form>
</div>
</template>
