const Task = require("../module/taskModule")


const createTask = async (req, res) => {
    const { taskName, description } = req.body;
    try {
        const task = new Task({ taskName, description })
        await task.save();
        res.status(201).json({ data: task })
    } catch (error) {
        res.status(401).send({ Error: error })

    }
}
const getTask = async (req, res) => {
    const { taskName, description } = req.body;
    try {
        const task = await Task.find()
        // await task.save();
        res.status(201).json({ data: task })
    } catch (error) {
        res.status(401).send({ Error: error })

    }
}
const deleteTask = async (req, res) => {
    const { _id } = req.body;
    try {
        const task = await Task.findByIdAndDelete(_id)
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });

        }
        res.status(201).json({ data: "Deleted successfully " })
    } catch (error) {
        res.status(401).send({ Error: error })

    }
}

const updateTask = async (req, res) => {
    const { _id } = req.params;
    const { taskName, description } = req.body;
    try {
        const task = await Task.findByIdAndUpdate(_id, { taskName, description }, { new: true })
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json({ message: 'Task updated successfully', task });
    } catch (error) {
        console.log(error)
        res.status(401).send({ Error: error })

    }
}
module.exports = { createTask, getTask, deleteTask, updateTask }