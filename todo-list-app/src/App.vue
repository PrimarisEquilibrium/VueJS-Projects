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
    },
    computed: {
        // Returns entries that are completed, i.e. done is true
        completedEntries() {
            return this.todoEntries.filter(todo => todo.done)
        }
    }
})
</script>

<template>
    <div class="wrapper">
        <h1>Todo List App</h1>
    
        <!-- Input for creating input entries -->
        <form @submit.prevent="addEntry()">
            <input type="text" placeholder="Enter todo entry" v-model="todo" required>
            <button class="submit-btn" type="submit">Add</button>
        </form>

        <div class="stats">
            <span>Entries: {{ todoEntries.length }}</span>
            <span>Completed: {{ completedEntries.length }}</span>
        </div>
    
        <!-- Render todo entries -->
        <div v-for="entry in todoEntries" :key="entry.name">
            <Entry :entry="entry" :deleteEntry="deleteEntry" />
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    align-items: center;
    margin-top: 6rem;
    flex-direction: column;
}

input {
    border: 1px solid var(--primary-color);
    border-top-left-radius: 4rem;
    border-bottom-left-radius: 4rem;
    background-color: var(--background-color);
    color: var(--primary-color);
    margin-top: 1.25rem;
    padding: 0.75rem 3rem;
    margin-bottom: 1.5rem;
}

.submit-btn {
    border: 1px solid var(--primary-color);
    border-top-right-radius: 4rem;
    border-bottom-right-radius: 4rem;
    background-color: var(--background-color);
    color: var(--primary-color);
    margin-top: 1.25rem;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
}

.stats {
    display: flex;
    margin-bottom: 1.25rem;
}

span {
    margin: 0 2rem;
}
</style>