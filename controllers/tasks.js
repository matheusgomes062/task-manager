const Task = require('../models/Task')

const getAllTasks = (req, res) => {
    const tasks = Task.find({})
    res.status(200).json({ tasks })
}

const createTask = (req, res) => {
    const tasks = Task.create(req.body)
    res.send('Create item')
    res.status(201).json({ task })
}

const getTask = (req, res) => {
    const { id: taskID } = req.params
    const task = Task.findOne({ _id: taskID })

    if (!task) {
        return next(Error(`No task with id : ${taskID}`, 404))
    }

    res.status(200).json({ task })
}

const updateTask = (req, res) => {
    const { id: taskID } = req.params
  
    const task = Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    })
  
    if (!task) {
      return next(Error(`No task with id : ${taskID}`, 404))
    }
  
    res.status(200).json({ task })
}

const deleteTask = (req, res) => {
    const { id: taskID } = req.params
    const task = Task.findOneAndDelete({ _id: taskID })
    if (!task) {
      return next(Error(`No task with id : ${taskID}`, 404))
    }
    res.status(200).json({ task })
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}