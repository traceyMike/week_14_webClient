<script setup>
// add script

// define prop
// define props object receives from parent
defineProps({
    student: Object // define the student prop type
})

const emit = defineEmits(['arrived-or-left', 'delete-student'])

// function to confirm and delete a student
const confirmThenDeleteStudent = () => {
if (confirm(`Delete ${student.name}?`)) {
        emit('delete-student', student)
        }
    }

// function to toggle presence of student
const togglePresence = (event) => {
    const isStudentPresent = event.target.checked
    emit('arrived-or-left', { ...student, present: isStudentPresent })
}

</script>



<template>
<!-- add HTML -->
<tr class="align-middle" v-bind:class="{ present: student.present, absent: !student.present }">
    <td>{{ student.name }}</td>
    <td>{{ student.starID }}</td>
    <td>
        <input
    type="checkbox"
    :checked="student.present"
    @change="togglePresence"
/>
     <span class="mx-3" v-if="student.present">Here</span>
     <span class="mx-3" v-else>Not present</span>
    </td>
    <td>
        <button class="btn btn-danger" v-on:click="confirmThenDeleteStudent">
            <i class="bi bi-trash-fill"></i> Delete
        </button>
    </td>
</tr>

</template>



<style scoped>
button {
    font-size: 0.9rem;
    padding: 0.3rem 0.6rem;
}

tr:nth-child(even) {
    background-color: #f8f9fa;
}

tr:hover {
    background-color: #e9ecef;
}


/* add CSS  */
.present {
    color: gray;
    font-style: italic;
}

.absent {
    color: black;
    font-weight: bold;
}

</style>