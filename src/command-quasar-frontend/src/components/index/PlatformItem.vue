<script>
export default {
  props: {
    platform: {
      type: String
    }
  },
  methods: {
    onItemClicked () {
      this.$router.push({ name: 'commandsPlatform', params: { platform: this.platform } })
    }
  }
}
</script>

<template>
  <q-item clickable v-ripple class="text-secondary"
    @click="onItemClicked()">
    <q-item-section>
      {{platform}}
    </q-item-section>
  </q-item>
</template>
