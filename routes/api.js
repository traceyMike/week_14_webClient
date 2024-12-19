// two routes - get all students at /studnets, return as JSON
// need to return since are in a promise
// create new student with a post route to /students, return 201 status..
// and text message

const express = require('express')
const database = require('../models')
const Student = database.Student

const router = express.Router()

router.get('/students', function(req, res, next) {
})

router.post('/students', function(req, res, next) {
})

router.delete('/students/id:', function(req, res, next) {
const StudentID = req.params.id
Student.destroy({where: { id: studentID}})
.then( (rowsDelete) => {
    if (rowsDeleted === 1) {
        return res.send('Student deleted')
    } else {
        return res.status(404).send('Student not found')
    }
}).catch( err => {
    return next(err)
})
})
module.exports = router