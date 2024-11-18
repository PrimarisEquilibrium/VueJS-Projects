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
    <span :class="{ done: entry.done }">{{ entry.name }}</span>
    <input type="checkbox" v-model="entry.done">
    <button @click="deleteEntry(entry)">X</button>
</template>

<style scoped>
.done {
    text-decoration: line-through;
}
</style>