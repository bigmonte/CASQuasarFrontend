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
      try {
        await this.$store.dispatch('snippets/updateSnippet', snippet)
        this.$store.dispatch('logger/addMessage', `Snippet Edited: id- ${snippet.id}`, false)
      } catch (error) {
        this.$store.dispatch('logger/addMessage', error, true)
      }
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
