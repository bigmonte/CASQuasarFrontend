<script>
import SnippetForm from '../components/snippets/SnippetForm'

export default {
  components: { SnippetForm },
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
    @on-form-submit="submitCreateForm($event) "/>
</template>
