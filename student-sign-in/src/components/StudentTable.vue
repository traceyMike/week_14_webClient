<script setup>

// script goes here
import { useStudentStore } from '../stores/StudentStore';

import { storeToRefs } from 'pinia';

// import computed
import { computed } from 'vue'

import StudentRow from './StudentRow.vue'

const studentStore = useStudentStore()

const { sortedStudents, studentCount, mostRecentStudent } = storeToRefs(studentStore)

// add functions - table is trying to call them 
//const deleteStudent = (student) => {
//    studentStore.deleteStudent(student)
//}

const arrivedOrLeft = (student, isStudentPresent) => {
    student.present = isStudentPresent
    studentStore.arrivedOrLeft(student)
}

const deleteStudent = (student) => {
    studentStore.deleteStudent(student);
}

// create computed property 
const pluralStudentMessage = computed ( () => {
    if (studentCount.value == 1) {
        return 'There is 1 student in class.'
    } else {
        return `There are ${studentCount.value} students in class`   
    }
})


</script>
<template>

<!-- HTML goes here -->
<div id="student-list-table" class="card m-2 p-2">
            <h4 class="card-title">Student List</h4>
            <h5 class="card-subtitle text-muted"> {{ pluralStudentMessage }}</h5>

            <!--table for displaying students-->
            <div id="student-table">
                <table class="table">
                    <thread>
                        <tr class="align-middle">
                            <th>Name</th>
                            <th>StarID</th>
                            <th>Present?</th>
                            <th>Delete</th>
                        </tr>
                    </thread>
                        <!-- v-for loop, create one StudentRow for each student in sortedStudents -->
                         <!-- each StudentRow will receive one student object as a prop -->
                        
                        
                    <tbody>
                        <!--StudentTable is the parent of StudentRow.vue, add event listener-->
                        <StudentRow
                            v-for="student in sortedStudents"
                            v-bind:student="student"
                            v-on:arrived-or-left="arrivedOrLeft"
                            v-on:delete-student="deleteStudent" >
                        </StudentRow>
          
                    </tbody>
                </table>
            </div>
        </div>


</template>

<style scoped>

/* CSS goes here */
#student-table {
    max-height: 500px;
    overflow: scroll;
}

th, td {
    width: 25%;
    text-align: center;
}

.present {
    color: gray;
    font-style: italic;
}

.absent {
    color: black;
    font-weight: bold;
}

</style>

       