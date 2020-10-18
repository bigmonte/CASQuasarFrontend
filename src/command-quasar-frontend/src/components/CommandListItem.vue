<script>
export default {
  props: {
    command: {
      type: Object
    }
  },
  emits: ['on-edit-clicked'],
  methods: {
    onEditButtonClicked (selectedCommand) {
      console.log('trying to emit')
      this.$emit('on-edit-clicked', selectedCommand)
    }
  }
}
</script>

<template>
  <q-card class=" text-white"
                    style="background: linear-gradient(45deg, #486678, #343434)">
    <q-card-section >
      <div class="row">
        <div class="col">
          <div class="text-h6 text-white q-ml-sm">{{command.howTo}}</div>
          <div class="text text-white q-ml-sm">{{command.platform}}</div>
          <div class="text text-green q-ml-sm q-mt-md">
            <code>{{command.commandLine}}</code>
          </div>
        </div>
        <div class="col-xl">
          <q-btn flat round dense
            @click="onEditButtonClicked(command)">
            <q-icon name="more_vert"></q-icon></q-btn></div>
      </div>
    </q-card-section>
  <!-- <q-card-actions>
    <q-btn type="update" color="primary"
      @click="onEditButtonClicked(command)">Edit command</q-btn>
  </q-card-actions> -->
  </q-card>
</template>
