const express = require('express');
const validateJWT = require('../auth/validateJWT');
const {
  createTask,
  getAllTasks,
  updateTask,
  removeTask
} = require('../controllers/taskController');

const router = express.Router();

router
  .route('/')
  .post(validateJWT, createTask)
  .get(getAllTasks)
  .put(validateJWT, updateTask)
  .delete(validateJWT, removeTask);

module.exports = router;
