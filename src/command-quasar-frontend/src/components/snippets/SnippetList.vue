<template>
    <div class="q-ma-sm"
      v-if="isDetailView">
        <div v-for="snippet in snippets" :key="snippet.id" class="q-py-md">
          <snippet-list-item
            :snippet='snippet'
            @on-edit-clicked="onEditButtonClicked"/>
        </div>
  </div>
  <snippet-edit
    v-else
    :snippet="selectedSnippet"
    @on-back-clicked="toggleView"/>
</template>

<script>
import SnippetListItem from './SnippetListItem'
import SnippetEdit from './SnippetEdit'

export default {
  name: 'SnippetList',
  components: { SnippetListItem, SnippetEdit },
  data () {
    return {
      selectedSnippet: null,
      isDetailView: true
    }
  },
  methods: {
    onEditButtonClicked (snippet) {
      this.selectedSnippet = snippet
      this.toggleView()
    },
    toggleView () {
      this.isDetailView = !this.isDetailView
    }
  },
  computed: {
    snippets: {
      get () {
        return this.$store.state.snippets.snippetsData
      }
    }
  }
}
</script>
