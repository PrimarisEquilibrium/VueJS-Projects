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
    },
    computed: {
        entryStyle() {
            return {
                '--entry-color': this.entry.done ? 'var(--secondary-color)' : 'var(--primary-color)'
            }
        }
    }
})
</script>

<template>
    <!-- Determine the todo entry color based on the entry.done state and assign it to the entry-color css variable -->
    <div 
        class="entry-container"
        :style="entryStyle"
    >
        <span :class="['entry-text', { done: entry.done }]">{{ entry.name }}</span>
        <div class="entry-input-container">
            <!-- Toggle todo entry completion button -->
            <button @click="() => entry.done = !entry.done">
                <font-awesome-icon class="icon" :icon="['fas', 'circle-check']" size="2x" />
            </button>
            <!-- Delete entry button -->
            <button @click="deleteEntry(entry)">
                <font-awesome-icon class="icon" :icon="['fas', 'circle-xmark']" size="2x" />
            </button>
        </div>
    </div>
</template>

<style scoped>
* {
    transition: border 0.3s ease, color 0.3s ease;
}

button {
    border: none;
    margin-left: 0.5rem;
}

span {
    color: var(--entry-color);
}

.entry-container {
    border: 1px solid var(--entry-color);
    padding: 0.75rem 1.5rem;
    width: 100%;
    max-width: 26rem;
    text-wrap: wrap;
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.entry-input-container {
    display: flex;
    align-items: center;
}

.entry-text {
    text-wrap: wrap;
    overflow-wrap: break-word;
    width: 17rem;
}

.entry-toggle {
    margin-right: 0.75rem;
}

.icon {
    background-color: var(--background-color);
    color: var(--entry-color);
    border: none;
    cursor: pointer;
}

.done {
    text-decoration: line-through;
}
</style>