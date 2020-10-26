<script>
import SlideItem from '../components/index/SlideItem'
import PlatformItem from '../components/index/PlatformItem'
export default {
  components: { SlideItem, PlatformItem },
  data () {
    return {
      currentCommandSlide: '',
      currentSnippetSlide: ''
    }
  },
  async created () {
    await this.$store.dispatch('commands/fetchCommands')
    await this.$store.dispatch('snippets/fetchSnippets')
    if (this.hasCommands) {
      this.currentCommandSlide = `${this.sliderCommands[0].id}`
    }
    if (this.hasSnippets) {
      this.currentSnippetSlide = `${this.sliderSnippets[0].id}`
    }
  },
  methods: {
    filterByPlatform (arr) {
      const platforms = []
      for (var i = 0; i < arr.length; i++) {
        const obj = arr[i]
        if (!platforms.includes(obj.platform)) {
          platforms.push(obj.platform)
        }
      }
      return platforms
    }
  },
  computed: {
    commands: {
      get () { return this.$store.state.commands.commandsData }
    },
    snippets: {
      get () { return this.$store.state.snippets.snippetsData }
    },
    sliderCommands: {
      get () { return this.$store.getters['commands/getLastCommands'](3) }
    },
    sliderSnippets: {
      get () { return this.$store.getters['snippets/getLastSnippets'](3) }
    },
    hasCommands: {
      get () { return this.commands.length > 0 }
    },
    hasSnippets: {
      get () { return this.snippets.length > 0 }
    },
    getCommandsPlatform () { return this.filterByPlatform(this.commands) },
    getSnippetsPlatform () { return this.filterByPlatform(this.snippets) }
  }
}
</script>

<template>
<div>
  <q-carousel
        v-if="hasCommands"
        v-model="currentCommandSlide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="250px"
        class="bg-primary text-white shadow-1 rounded-borders"
      >
        <template v-for="command in sliderCommands">
          <slide-item
            :key="command.id"
            :name="`${command.id}`"
            :title="command.howTo"
            :subtitle="command.platform"
            :content="command.commandLine"/>
        </template>
      </q-carousel>
      <div
        class="text-h6 text-white text-center q-pa-xl"
        v-if="!hasCommands && !hasSnippets">No content to show</div>
  <div class="q-pa-md">
    <div class="row">
      <div class="col q-pa-md"
        v-if="hasCommands">
        <div class="text-h6 text-primary text-center text-secondary q-pb-md"> CLI's </div>
        <q-list dense bordered padding class="rounded-borders bg-primary"
          v-for="platform in getCommandsPlatform" :key="platform">
          <platform-item
            type='commands'
            :platform="platform"/>
        </q-list>
      </div>
      <div class="col q-pa-md"
        v-if="hasSnippets">
        <div class="text-h6 text-primary text-center text-secondary q-pb-md"> Platforms / Languages </div>
        <q-list dense bordered padding class="rounded-borders bg-primary"
          v-for="platform in getSnippetsPlatform" :key="platform">
          <platform-item
            type='snippets'
            :platform="platform"/>
        </q-list>
      </div>
    </div>
  </div>
</div>
</template>
