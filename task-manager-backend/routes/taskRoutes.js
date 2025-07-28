const express = require('express');

const {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
} = require('../controllers/taskController');

const router = express.Router();

router.route('/')
    .get(getTasks)          // GET /api/tasks
    .post(createTask);      // POST /api/tasks

router.route('/:id')
    .get(getTask)           // GET /api/tasks/:id
    .put(updateTask)        // PUT /api/tasks/:id
    .delete(deleteTask);    // DELETE /api/tasks/:id

module.exports = router;