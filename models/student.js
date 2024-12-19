// define DB columns and types
// Student.sync() call will create the Student able in the database

module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
        name: {
            type: DataTypes.STRING,
            allowNull: false // null values not allowed
        },
        starID: {
            type: DataTypes.STRING, // starID must be unique
            allowNull: false,
            unique: true
        },
        present: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false // default value for present
        }
    })
    // set force: false
    // database not deleted every time server restarts
    // set sync force true to delete table and re-create
    Student.sync({ force: false }).then(() => {
        console.log('Synced student table')
    })

    return Student
}