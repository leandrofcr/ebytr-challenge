const express = require('express');
const validateJWT = require('../auth/validateJWT');
const { createTask, getAllTasks } = require('../controllers/taskController');

const router = express.Router();

router.route('/').post(validateJWT, createTask).get(validateJWT, getAllTasks);

module.exports = router;
