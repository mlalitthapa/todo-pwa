<template>
  <v-layout row>
    <v-flex
      lg3
      md4
      sm6
      xs12
      class="ma-2"
      v-for="(task, index) in tasks"
      :key="index"
    >
      <Task :task="task"/>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'
import Task from '@/components/task/Task'

export default {
  name: 'All',
  components: { Task },
  computed: {
    ...mapState(['tasks'])
  }
}
</script>

<style scoped>

</style>
