<script>
export default {
  props: {
    snippet: {
      type: Object,
      default: () => {}
    },
    formTitle: {
      type: String
    }
  },
  data () {
    return {
      uSnippet: { ...this.snippet }
    }
  },
  emit: ['on-back-clicked', 'on-form-submit'],
  methods: {
    onBackButton: function () {
      this.$emit('on-back-clicked')
    },
    onFormSubmit () {
      this.$emit('on-form-submit', this.uSnippet)
    }
  }
}
</script>
<template>
  <div>
    <div class="row q-pa-md">
      <q-btn
        type="back"
        color="primary"
        flat
        class="q-ml-sm"
        @click="onBackButton"
      >
        <q-icon name="arrow_back" color="white"></q-icon>
      </q-btn>
    </div>
    <div class="row justify-center content-center items-center">
      <div class="col q-pa-sm" style="max-width: 700px">
        <q-form class="q-gutter-md" @submit.prevent="onFormSubmit">
          <q-input
            label-color="info"
            filled
            type="text"
            v-model="uSnippet.howTo"
            label="How To"
            :rules="[
              (val) => (val && val.length > 0) || 'Field cannot be empty',
            ]"
          ></q-input>
          <q-input
            label-color="info"
            filled
            v-model="uSnippet.codeSnippet"
            label="Snippet Line"
            hint="Snippet Line Interface associated with the snippet"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Field cannot be empty',
            ]"
          ></q-input>
          <q-input
            label-color="info"
            filled
            type="text"
            v-model="uSnippet.platform"
            label="Platform"
            hint="What is the platform being used for this snippet?"
            :rules="[
              (val) => (val && val.length > 0) || 'Field cannot be empty',
            ]"
          >
          </q-input>
          <q-btn type="submit" color="primary">{{ formTitle }}</q-btn>
        </q-form>
      </div>
    </div>
  </div>
</template>
