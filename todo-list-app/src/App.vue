<script lang="ts">
import { defineComponent } from 'vue';

interface TodoList {
  name: string;
  done: boolean;
}

export default defineComponent({
  data() {
    return {
      todo: "",
      todoEntries: [] as TodoList[]
    }
  },
  methods: {
    addEntry() : void {
      this.todoEntries = [...this.todoEntries, {name: this.todo, done: false}]
      this.todo = ""; // Clear input box
    }
  }
})
</script>

<template>
  <h1>Todo List App</h1>

  <form @submit.prevent="addEntry()">
    <input type="text" placeholder="Enter todo entry" v-model="todo" required>
    <button type="submit">Add</button>
  </form>

  <div v-for="entry in todoEntries" :key="entry.name">
    <span :class="{ done: entry.done }">{{ entry.name }}</span>
    <input type="checkbox" v-model="entry.done">
  </div>
</template>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>
