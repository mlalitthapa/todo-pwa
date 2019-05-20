<template>
  <v-app>
    <v-navigation-drawer
      :clipped="drawer.clipped"
      :fixed="drawer.fixed"
      :permanent="drawer.permanent"
      v-model="drawer.open"
      app
    >
    </v-navigation-drawer>

    <v-toolbar
      app
      dark
      color="primary"
      :fixed="toolbar.fixed"
      :clipped-left="toolbar.clippedLeft"
    >
      <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>NO</span>
        <span class="font-weight-light">TES</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      drawer: {
        clipped: false,
        fixed: false,
        open: false,
        permanent: false
      },
      toolbar: {
        clippedLeft: false,
        fixed: true
      }
    }
  },
  methods: {
    toggleDrawer () {
      this.drawer.permanent = !this.drawer.permanent
      if (this.drawer.permanent) {
        this.drawer.clipped = true
        this.toolbar.clippedLeft = true
      } else {
        this.drawer.open = !this.drawer.open
      }
    }
  }
}
</script>
