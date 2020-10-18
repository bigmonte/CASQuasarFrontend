<script>
export default {}
</script>

<template>
  <q-tabs v-model="tab" shrink>
    <q-tab name="Commands" label="Commands" active=true></q-tab>
    <q-tab name="Snippets" label="Snippets"></q-tab>
    <q-btn flat round dense icon="search"></q-btn>
  </q-tabs>
</template>
