<template>
  <q-carousel
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
</template>

<script>
import SlideItem from '../components/SlideItem'
export default {
  components: { SlideItem },
  data () {
    return {
      currentSlide: '',
      isDetailView: true
    }
  },
  async created () {
    await this.$store.dispatch('commands/fetchCommands')
    if (this.commands && this.commands.length > 0) {
      this.currentSlide = `${this.commands[0].id}`
    }
  },
  computed: {
    commands: {
      get () {
        return this.$store.state.commands.commandsData
      }
    }
  }
}
</script>
