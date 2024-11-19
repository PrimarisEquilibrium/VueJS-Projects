<script lang="ts">
/**
 * Entry Component
 * @description Renders the information of a todo entry (TodoEntry object) and handles any individual-level operations.
 * 
 * - Displays the name of the todo entry.
 * - Toggles the completion state of the task.
 * - Deletes the todo entry when the delete button is pressed.
 */

import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { type TodoEntry } from '@/App.vue';

export default defineComponent({
    props: {
        /**
         * The TodoEntry object to use.
         */
        entry: {
            type: Object as PropType<TodoEntry>,
            required: true
        },
        /**
         * A function that removes the given TodoEntry object from the TodoList.
         */
        deleteEntry: Function as PropType<(entry: TodoEntry) => void>
    }
})
</script>

<template>
    <div class="entry-container">
        <span :class="{ done: entry.done }">{{ entry.name }}</span>
        <div class="entry-input-container">
            <input type="checkbox" v-model="entry.done">
            <button @click="deleteEntry(entry)">X</button>
        </div>
    </div>
</template>

<style scoped>
.entry-container {
    border: 1px solid white;
    padding: 0.75rem 1.5rem;
    min-width: 26rem;
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

input {
    margin: 0 0.5rem;
}

button {
    padding: 0.30rem 0.5rem;
}

.done {
    text-decoration: line-through;
}
</style>