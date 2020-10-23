<template>
  <q-carousel
        v-model="slide"
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
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="style" size="56px"></q-icon>
          <div class="q-mt-md text-center">
            AHAAHAHAHH
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px"></q-icon>
          <div class="q-mt-md text-center">
            ASDASDASHDJASDjk
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px"></q-icon>
          <div class="q-mt-md text-center">
            ASFLKASJFASKFJKASLF
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px"></q-icon>
          <div class="q-mt-md text-center">
            ASFKJASHFIUOo21789961827
          </div>
        </q-carousel-slide>
      </q-carousel>
</template>

<script>

export default {
  data () {
    return {
      slide: 'style',
      isDetailView: true,
      selectedCommand: null
    }
  }
}
</script>
