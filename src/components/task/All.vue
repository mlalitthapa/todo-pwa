<template>
  <v-layout row wrap justify-center>
    <v-flex xs2 v-show="loading">
      <v-progress-circular
        indeterminate
        color="primary"
      ></v-progress-circular>
    </v-flex>
    <v-flex
      lg3
      md4
      sm6
      xs12
      v-for="(task, index) in tasks"
      :key="index"
    >
      <Task :task="task"/>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Task from '@/components/task/Task'
import { FETCH_TASKS } from '@/config/actions'

export default {
  name: 'All',
  components: { Task },
  created () {
    this[FETCH_TASKS]()
  },
  computed: {
    ...mapState(['tasks', 'loading'])
  },
  methods: {
    ...mapActions([
      FETCH_TASKS
    ])
  }
}
</script>

<style scoped>

</style>
