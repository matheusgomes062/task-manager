const express = require('express')
const router = express.Router()
// const tasks = require('./routes/task')

const { 
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
    editTask,
} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router