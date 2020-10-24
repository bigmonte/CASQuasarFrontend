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
      isDetailView: true
    }
  },
  watch: {
    searchText: function (text) {
      this.handleSearch(text)
    }
  },
  async created () {
    try {
      this.$store.dispatch('logger/addMessage', 'Fetching snippets from API', false)
    } catch (error) {
      this.$store.dispatch('logger/addMessage', error, true)
    }
    this.$store.dispatch('snippets/fetchSnippets')
  },
  methods: {
    async handleSearch (text) {
      if (this.canSearch) {
        try {
          this.$store.dispatch('snippets/fetchSearchData')
          this.$store.dispatch('logger/addMessage', `'Snippets search request ${text}'`, false)
        } catch (error) {
          this.$store.dispatch('logger/addMessage', error, true)
        }
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
