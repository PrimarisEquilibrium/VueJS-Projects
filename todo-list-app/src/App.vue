<script lang="ts">
import { defineComponent } from 'vue';

interface TodoEntry {
  name: string;
  done: boolean;
}

export default defineComponent({
  data() {
    return {
      todo: "",
      todoEntries: [] as TodoEntry[]
    }
  },
  methods: {
    addEntry() : void {
      this.todoEntries = [...this.todoEntries, {name: this.todo, done: false}]
      this.todo = ""; // Clear input box
    },
    deleteEntry(entry: TodoEntry) : void {
      this.todoEntries = this.todoEntries.filter(e => e !== entry)
    }
  }
})
</script>

<template>
  <h1>Todo List App</h1>

  <!-- Input for creating input entries -->
  <form @submit.prevent="addEntry()">
    <input type="text" placeholder="Enter todo entry" v-model="todo" required>
    <button type="submit">Add</button>
  </form>

  <!-- Render todo entries -->
  <div v-for="entry in todoEntries" :key="entry.name">
    <span :class="{ done: entry.done }">{{ entry.name }}</span>
    <input type="checkbox" v-model="entry.done">
    <button @click="deleteEntry(entry)">X</button>
  </div>
</template>

<style scoped src="./styles/app.css">
</style>