const express = require('express');
const validateJWT = require('../auth/validateJWT');
const {
  createTask,
  getAllTasks,
  updateTask
} = require('../controllers/taskController');

const router = express.Router();

router
  .route('/')
  .post(validateJWT, createTask)
  .get(validateJWT, getAllTasks)
  .put(validateJWT, updateTask);

module.exports = router;
