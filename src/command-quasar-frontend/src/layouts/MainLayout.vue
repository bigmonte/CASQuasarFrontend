<template>
  <q-layout view="lHh Lpr lFf" style="background-color: #3a4959">
    <q-header elevated>
      <q-toolbar class="bg-primary text-white">
        <q-toolbar-title>   <router-link
          class="q-btn flat"
          :to="{name: 'root'}"
          > Commands and Snippets </router-link></q-toolbar-title>
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
