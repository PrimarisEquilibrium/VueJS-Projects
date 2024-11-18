<script lang="ts">
import { defineComponent } from 'vue'
import Entry from "./components/Entry.vue"

export interface TodoEntry {
    name: string;
    done: boolean;
}

/**
 * Returns a TodoEntry object.
 * @param name The name of the todo entry.
 * @returns A TodoEntry object with the specified name and a done value initialized to false.
 */
function createTodoEntry(name: string): TodoEntry {
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
    components: {
        Entry
    },
    methods: {
        /**
         * Adds a todo entry to the list.
         */
        addEntry(): void {
            let newTodoEntry: TodoEntry = createTodoEntry(this.todo)
            this.todoEntries = [...this.todoEntries, newTodoEntry]
            this.todo = ""; // Clear input box
        },

        /**
         * Deletes the specified todo entry from the list.
         * @param entry The todo entry to be removed.
         */
        deleteEntry(entry: TodoEntry): void {
            this.todoEntries = this.todoEntries.filter(e => e !== entry)
        }
    }
})
</script>

<template>
    <div class="wrapper">
        <h1>Todo List App</h1>
    
        <!-- Input for creating input entries -->
        <form @submit.prevent="addEntry()">
            <input class="todo-input" type="text" placeholder="Enter todo entry" v-model="todo" required>
            <button class="todo-submit-btn" type="submit">Add</button>
        </form>
    
        <!-- Render todo entries -->
        <div v-for="entry in todoEntries" :key="entry.name">
            <Entry :entry="entry" :deleteEntry="deleteEntry" />
        </div>
    </div>
</template>

<style scoped src="./styles/app.css"></style>