<template>
  <snippet-list
  :snippets="snippets"></snippet-list>
</template>

<script>
import SnippetList from '../components/snippets/SnippetList'

export default {
  components: { SnippetList },
  data () {
    return {
      isDetailView: true,
      selectedSnippet: null
    }
  },
  watch: {
    searchText: function (text) {
      this.handleSearch(text)
    }
  },
  async created () {
    this.$store.dispatch('snippets/fetchSnippets')
  },
  methods: {
    async handleSearch (text) {
      if (this.canSearch) {
        this.$store.dispatch('snippets/fetchSearchData')
        this.searchingSnippets = true
        this.selectedSnippet = null
      }
    }
  },
  computed: {
    canSearch: {
      get () {
        return this.$store.getters['snippets/canSearch']
      }
    },
    snippets: {
      get () {
        if (this.canSearch) return this.$store.state.snippets.searchData
        return this.$store.state.snippets.snippetsData
      },
      set (val) {
        if (!this.canSearch) this.$store.commit('snippets/updateSnippets', val)
      }
    },
    searchText: {
      get () {
        return this.$store.state.snippets.searchText
      }
    }
  }
}
</script>
