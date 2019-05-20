<template>
  <v-app>
    <v-navigation-drawer
      :clipped="drawer.clipped"
      :fixed="drawer.fixed"
      :permanent="drawer.permanent"
      v-model="drawer.open"
      app
    >
      <v-list>
        <v-list-tile
          v-for="item in drawer.items"
          :to="item.route"
          :key="item.title"
          @click="toggleDrawer"
        >
          <v-icon>{{item.icon}}</v-icon>
          <v-list-tile-content class="pl-2">{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
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
      <v-container>
        <v-btn
          color="pink"
          dark
          small
          bottom
          right
          fab
          absolute
          @click="addNewTask"
        >
          <v-icon>add</v-icon>
        </v-btn>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app></v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: {
        clipped: false,
        fixed: false,
        open: false,
        permanent: false,
        items: [
          {
            icon: 'list',
            title: 'All',
            route: '/'
          },
          {
            icon: 'done',
            title: 'Done',
            route: '/done'
          },
          {
            icon: 'clear',
            title: 'Pending',
            route: '/pending'
          }
        ]
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
    },
    addNewTask () {
      if (this.drawer.open) this.toggleDrawer()
      this.$router.push('new')
    }
  }
}
</script>
