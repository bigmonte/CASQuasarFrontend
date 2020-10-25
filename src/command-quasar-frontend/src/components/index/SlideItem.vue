<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <q-carousel-slide :name="name" class="column no-wrap flex-center">
    <q-icon name="style" size="56px"></q-icon>
    <div class="q-mt-md text-center">
    </div>
    <q-card dark bordered class="bg-primary my-card">
      <q-card-section>
        <div class="text-h6">{{title}}</div>
        <div class="text-subtitle2">{{subtitle}}</div>
      </q-card-section>

      <q-separator dark inset></q-separator>

      <q-card-section>
      {{content}}
      </q-card-section>
    </q-card>

  </q-carousel-slide>
</template>
