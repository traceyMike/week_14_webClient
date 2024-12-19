<script setup>
// script goes here
// import Vue 
import { onMounted } from 'vue' // function called when component first loaded
import NewStudentForm from './components/NewStudentForm.vue';
import StudentTable from './components/StudentTable.vue';
import StudentMessage from './components/StudentMessage.vue';

import { useStudentStore } from './stores/StudentStore'

const studentStore = useStudentStore() // calling and storing here

onMounted(() => {
    // whatever in here will run when component is first displayed
    studentStore.getAllStudents()
})

</script>

<template>

<!-- HTML goes here -->
<NewStudentForm></NewStudentForm>
<StudentTable></StudentTable>
<StudentMessage></StudentMessage>

</template>

<style scoped>

/* CSS goes here */

</style>