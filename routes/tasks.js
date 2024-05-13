const express = require('express')
const router = express.Router()
// const tasks = require('./routes/task')

const { getAllTasks } = require('../controllers/tasks')

router.route('/').get(getAllTasks)

// app.use('/api/v1/tasks', tasks)

module.exports = router