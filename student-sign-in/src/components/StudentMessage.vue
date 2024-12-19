<script setup>

// script goes here
import { useStudentStore } from '../stores/StudentStore';
import { storeToRefs } from 'pinia';

const studentStore = useStudentStore()

const { mostRecentStudent } = storeToRefs(studentStore)

</script>

<template>

<!-- HTML goes here -->
<div id="welcome-or-goodbye-message" class="m-2">
            <div v-if="mostRecentStudent.name"> 

                <div v-if="mostRecentStudent.present" class="alert alert-success">
                    Welcome, {{ mostRecentStudent.name }}!
            </div>
            <div v-else class="alert alert-info">
                Goodbye, {{ mostRecentStudent.name }}, see you later aligator!
            </div>
        </div>
    </div>

</template>

<style scoped>

/* CSS goes here */

</style>