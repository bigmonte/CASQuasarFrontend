<script>
import SnippetForm from './SnippetForm'
export default {
  props: {
    snippet: {
      type: Object
    }
  },
  components: { SnippetForm },
  emits: ['on-back-clicked'],
  data () {
    return {
      formTitle: 'Edit Snippet'
    }
  },
  methods: {
    async onFormSubmit (snippet) {
      if (this.snippet.isEqual(snippet)) { // TODO make it simpler
        this.$store.dispatch('logger/addMessage', { message: 'No changes detected when editing Snippet!', isError: true })
        return
      }
      await this.$store.dispatch('snippets/updateSnippet', snippet)
    },
    onBackClicked () {
      this.$emit('on-back-clicked')
    }
  }
}
</script>

<template>
<snippet-form
    :snippet="snippet"
    :formTitle="formTitle"
    @on-form-submit="onFormSubmit($event)"
    @on-back-clicked="onBackClicked"/>
</template>
