<template>
  <v-layout row>
    <v-flex
      offset-lg4
      lg4
      offset-sm3
      sm6
    >
      <div class="font-weight-medium text-capitalize headline">Add new task</div>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="addTask"
      >
        <v-text-field
          v-model="title"
          :rules="titleRules"
          label="Title"
          required
        ></v-text-field>

        <v-textarea
          v-model="description"
          :rules="descriptionRules"
          label="Description"
          required
        ></v-textarea>

        <v-btn
          color="primary"
          :disabled="!valid"
          v-show="!isLoading"
          @click="addTask"
        >Add
        </v-btn>
        <v-progress-circular
          indeterminate
          color="primary"
          v-show="isLoading"
        ></v-progress-circular>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { ADD_TASK } from '@/config/actions'
import { TASK } from '@/config/modules'
import { ADDING_TASK } from '@/config/loaders'

const { mapActions, mapState } = createNamespacedHelpers(TASK)

export default {
  name: 'NewTask',
  data: () => ({
    valid: true,
    title: '',
    titleRules: [
      v => !!v || !!v.trim() || 'Title is required'
    ],
    description: '',
    descriptionRules: [
      v => !!v || !!v.trim() || 'Description is required'
    ]
  }),
  computed: {
    ...mapState([
      'loading'
    ]),
    isLoading () {
      return this.loading === ADDING_TASK
    }
  },
  methods: {
    ...mapActions([
      ADD_TASK
    ]),
    addTask () {
      if (!this.$refs.form.validate()) return false
      this[ADD_TASK]({
        title: this.title,
        description: this.description,
        completed: false
      })
      this.title = ''
      this.description = ''
      this.$refs.form.resetValidation()
    }
  }
}
</script>

<style scoped>

</style>
