<script>
export default {
  props: {
    command: {
      type: Object
    }
  },
  emit: ['on-back-clicked'],
  methods: {
    handleClick: function () {
      this.$emit('on-back-clicked')
    },
    onSubmit () { console.log('Submit') }
  }
}
</script>
<template>
<div class="q-pa-md" style="max-width: 700px">
  <div class="text-h6 text-blue"> Edit command</div>
<q-form
      class="q-gutter-md"
    >
      <q-input
        filled
        type="text"
        v-model="command.howTo"
        label="How To"
      ></q-input>
      <q-input
        filled
        v-model="command.commandLine"
        label="Command Line"
        hint="Command Line Interface associated with the command"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      ></q-input>
      <q-input
        filled
        type="text"
        v-model="command.platform"
        label="Platform"
        hint="What is the platform being used for this command?"
      ></q-input>
      <div>
        <q-btn label="Submit" type="submit" color="primary" @click="onSubmit"></q-btn>
        <q-btn label="Back" type="back" color="secondary" flat class="q-ml-sm" @click="handleClick"></q-btn>
      </div>
    </q-form>
</div>
</template>
