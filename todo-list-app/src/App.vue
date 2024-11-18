<script lang="ts">
import { defineComponent } from 'vue';

interface TodoEntry {
  name: string;
  done: boolean;
}

/**
 * Returns a TodoEntry object.
 * @param name The name of the todo entry.
 */
function createTodoEntry(name: string) : TodoEntry {
  return {
    name: name,
    done: false
  }
}

export default defineComponent({
  data() {
    return {
      todo: "",
      todoEntries: [] as TodoEntry[]
    }
  },
  methods: {
    /**
     * Adds a todo entry to the list.
     */
    addEntry() : void {
      let newTodoEntry: TodoEntry = createTodoEntry(this.todo)
      this.todoEntries = [...this.todoEntries, newTodoEntry]
      this.todo = ""; // Clear input box
    },

    /**
     * Deletes the specified todo entry from the list.
     * @param entry The todo entry to be removed.
     */
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