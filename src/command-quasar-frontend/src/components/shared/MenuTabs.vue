<script>
export default {}
</script>

<template>

  <q-tabs shrink>
    <router-link
          :to="{name: 'CommandNew'}"
          class="q-btn flat round dense"
          >
      <q-icon name="add" color="white"></q-icon>
    </router-link>
    <q-tab name="Commands" label="Commands" active=true></q-tab>
    <q-tab name="Snippets" label="Snippets"></q-tab>
    <q-btn flat round dense icon="search"></q-btn>
  </q-tabs>
</template>
