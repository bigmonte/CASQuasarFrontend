<script>
export default {
  data () {
    return {
      text: '',
      tab: 'commands'
    }
  },
  emits: ['on-text-clicked'],
  methods: {
    onSearchInputHandled (text) {
      this.$emit('on-text-clicked', text)
    }
  }
}
</script>

<template>
  <q-tabs shrink>
    <q-input
      dark
      borderless
      v-model="text"
      input-class="text-right"
      class="q-ml-md"
      @keyup="onSearchInputHandled($event.target.value)"
    >
      <template v-slot:append>
        <q-icon v-if="text === ''" name="search"></q-icon>
        <q-icon
          v-else
          name="clear"
          class="cursor-pointer"
          @click="text = ''"
        ></q-icon>
      </template>
      <q-space />
    </q-input>
    <router-link :to="{ name: 'CommandNew' }" class="q-btn flat round dense">
      <q-icon name="add" color="white"></q-icon>
    </router-link>
    <q-tabs v-model="tab">
      <q-tab name="commands" label="Commands"></q-tab>
      <q-tab name="snippets" label="Snippets"></q-tab>
    </q-tabs>
  </q-tabs>
</template>
