const express = require('express');
// const validateJWT = require('../auth/validateJWT');
const {
  createTask,
  getAllTasks,
  updateTask,
  removeTask
} = require('../controllers/taskController');

const router = express.Router();

router
  .route('/')
  .post(createTask)
  .get(getAllTasks)
  .put(updateTask)
  .delete(removeTask);

module.exports = router;
