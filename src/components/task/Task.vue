<template>
  <v-card
    color="cyan"
    class="white--text"
  >
    <v-card-title primary-title>
      <div>
        <div class="headline">{{task.title}}</div>
        <span>{{task.description}}</span>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat dark>Mark Completed</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
