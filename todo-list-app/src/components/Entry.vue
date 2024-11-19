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
    <div :class="(entry.done) ? 'entry-container inactive-entry' : 'entry-container'">
        <span :class="{ done: entry.done }">{{ entry.name }}</span>
        <div class="entry-input-container">
            <div class="entry-toggle">
                <font-awesome-icon 
                    @click="() => entry.done = !entry.done" 
                    :class="(entry.done) ? 'icon icon-inactive' : 'icon'" 
                    :icon="['fas', 'circle-check']" 
                    size="2x"
                />
            </div>
            <button @click="deleteEntry(entry)">
                <font-awesome-icon 
                    :class="(entry.done) ? 'icon icon-inactive' : 'icon'" 
                    :icon="['fas', 'circle-xmark']" 
                    size="2x" 
                />
            </button>
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

.entry-input-container{
    display: flex;
    align-items: center;
}

.entry-toggle {
    margin-right: 0.75rem;
}

/* Styling for inactive todo list entries */
.inactive-entry {
    border: 1px solid var(--secondary-color);
}

button {
    border: none;
}

.icon {
    background-color: var(--background-color);
    color: var(--primary-color);
    border: none;
    cursor: pointer;
}

.icon-inactive {
    color: var(--secondary-color);
}

.done {
    text-decoration: line-through;
}
</style>