<script>
import LoggerList from '../logger/LoggerList'
export default {
  name: 'CFooter',
  components: { LoggerList }
}
</script>

<template>
  <q-footer>
      <q-banner inline-actions class="text-white bg-primary">
        <logger-list/>
        <template v-slot:action>
          <q-btn flat color="white" label="Hide"></q-btn>
        </template>
      </q-banner>
    </q-footer>
</template>
