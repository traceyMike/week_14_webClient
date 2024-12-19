import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { mande } from 'mande'

const studentAPI = mande('api/students') // student api get or post - goes to this URL

export const useStudentStore = defineStore('students', () => {
    
    // reactive data - mostRecentStudents
    const studentList = ref( [] )

    const mostRecentStudent = ref( {} )
    
    const addNewStudentErrors = ref( [] )

    function getAllStudents() {
        // make api request to get all students and save them in store - studentList
        // use mande library
        studentAPI.get().then( students => { // students is JSON response from API
            studentList.value = students 
        })
    }

    function addNewStudent(student) {
        studentAPI.post(student).then( () => {
            getAllStudents()
        }).catch( err => {
         })
    }

    // add deleteStudent function - delete student from the list
    // needs an argument, which student to delete?
    // since studentList is reactive, anything that reads this data updates
    function deleteStudent(studentToDelete) {
        const deleteStudentAPI = mande(`/api/students/${studentToDelete.id}`)
            deleteStudentAPI.delete().then( () => {
                getAllStudents()
            })
    }
     

    // if StudentTable can tell the store when student arrives
    // or leaves, store can update the mostRecentStudent value
    // function in the store called arrivedOrLeft - set the mostRecentStudent value
    
    // modify arrivedOrLeft
    // use student objects id to create url
    // once request complete, fetch all students
    function arrivedOrLeft(student) {
        const editStudentAPI = mande(`/api/students/${student.id}`)
        editStudentAPI.patch(student).then( () => {
            getAllStudents
        })
    }
    // displaying the number of students - stores can hold computed properties too
    const studentCount = computed( () => {
        return studentList.value.length
    })
    // computed property
    const sortedStudents = computed( () => {
        return studentList.value.toSorted( (s1, s2) => {
            return s1.name.localeCompare(s2.name)
        })
    })

    return {
        // reactive 
        studentList,
        mostRecentStudent,
        addNewStudentErrors,
        
        // functions
        getAllStudents,
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,

        // computed
        studentCount,
        sortedStudents
    }

})