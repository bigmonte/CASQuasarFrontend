<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-primary glossy text-white">
        <q-toolbar-title> Commands and Snippets </q-toolbar-title>
        <menu-tabs/>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import MenuTabs from '../components/shared/MenuTabs'

export default {
  name: 'MainLayout',
  components: { MenuTabs },
  data () {
    return {}
  }
}
</script>
