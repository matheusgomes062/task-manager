const getAllTasks = (req, res) => {
    res.send('All items')
}

const createTask = (req, res) => {
    res.send('Create item')
    res.status(201).json(req.body)
}

const getTask = (req, res) => {
    res.json({ id: req.params.id })
}

const updateTask = (req, res) => {
    res.send('Update item')
}

const deleteTask = (req, res) => {
    res.send('Delete item')
}

const deleteAllTasks = (req, res) => {
    res.send('Delete all items')
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    deleteAllTasks
}