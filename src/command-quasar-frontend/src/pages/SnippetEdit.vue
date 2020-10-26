<script>
import SnippetForm from '../components/snippets/SnippetForm'
export default {
  components: { SnippetForm },
  data () {
    return {
      formTitle: 'Edit Snippet'
    }
  },
  beforeMount () { // Todo use beforeEnterRoute?
    if (this.snippet === null) {
      this.$router.push('/404')
    }
  },
  methods: {
    async onFormSubmit (snippet) {
      if (this.snippet.isEqual(snippet)) { // TODO make it simpler
        this.$store.dispatch('logger/addMessage', { message: 'No changes detected when editing Snippet!', isError: true })
        return
      }
      await this.$store.dispatch('snippets/updateSnippet', snippet)
    }
  },
  computed: {
    snippet: {
      get () {
        return this.$store.getters['snippets/getSnippetWithId'](this.$route.params.id)
      }
    }
  }
}

</script>

<template>
<snippet-form
    :snippet="snippet"
    :formTitle="formTitle"
    @on-form-submit="onFormSubmit($event)"/>
</template>
