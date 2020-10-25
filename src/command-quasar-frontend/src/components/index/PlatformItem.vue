<script>
export default {
  props: {
    platform: {
      type: String
    }
  }
}
</script>

<template>
  <q-item clickable v-ripple class="text-secondary">
    <q-item-section>
      {{platform}}
    </q-item-section>
  </q-item>
</template>
