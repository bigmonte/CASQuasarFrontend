<script>
import SnippetForm from '../components/snippets/SnippetForm'

export default {
  components: { SnippetForm },
  beforeUnmount () {
    this.clearAlertTimeout()
  },
  methods: {
    async submitCreateForm (snippetToCreate) {
      this.$store.dispatch('snippets/createSnippet', snippetToCreate)
    }
  }
}
</script>

<template>
  <snippet-form
    :formTitle="`${'Add snippet'}`"
    @on-form-submit="submitCreateForm($event) "
    @on-back-clicked="$router.go(-1)" />
</template>
