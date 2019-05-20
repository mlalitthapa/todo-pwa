<template>
  <v-layout row>
    <v-flex
      lg3
      md4
      sm6
      xs12
      class="ma-2"
      v-for="task in tasks"
      :key="task.id"
    >
      <Task :task="task" />
    </v-flex>
  </v-layout>
</template>

<script>
import Task from '@/components/task/Task'
export default {
  name: 'All',
  components: { Task },
  data: () => ({
    tasks: [
      {
        id: 1,
        title: 'Get a job',
        description: 'Search job',
        completed: false
      },
      {
        id: 2,
        title: 'Take a walk',
        description: 'Wake up early in the morning and go for a walk',
        completed: true
      }
    ]
  })
}
</script>

<style scoped>

</style>
