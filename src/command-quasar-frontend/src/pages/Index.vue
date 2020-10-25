<template>
<div>
  <q-carousel
        v-if="hasCommands"
        v-model="currentSlide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="300px"
        class="bg-primary text-white shadow-1 rounded-borders"
      >
        <template v-for="command in commands">
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
          v-for="command in commands" :key="command.id">
          <platform-item
            :platform="command.platform"/>
        </q-list>
      </div>
      <div class="col q-pa-md"
        v-if="hasSnippets">
        <div class="text-h6 text-primary text-center text-secondary q-pb-md"> Platforms / Languages </div>
        <q-list dense bordered padding class="rounded-borders bg-primary"
          v-for="snippet in snippets" :key="snippet.id">
          <platform-item
            :platform="snippet.platform"/>
        </q-list>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import SlideItem from '../components/index/SlideItem'
import PlatformItem from '../components/index/PlatformItem'
export default {
  components: { SlideItem, PlatformItem },
  data () {
    return {
      currentSlide: '',
      isDetailView: true
    }
  },
  async created () {
    await this.$store.dispatch('commands/fetchCommands')
    await this.$store.dispatch('snippets/fetchSnippets')
    if (this.hasCommands) {
      this.currentSlide = `${this.commands[0].id}`
    }
  },
  computed: {
    commands: {
      get () {
        return this.$store.state.commands.commandsData
      }
    },
    snippets: {
      get () {
        return this.$store.state.snippets.snippetsData
      }
    },
    hasCommands: {
      get () {
        return this.commands.length > 0
      }
    },
    hasSnippets: {
      get () {
        return this.snippets.length > 0
      }
    }
  }
}
</script>
