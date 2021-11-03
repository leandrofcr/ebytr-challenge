const express = require('express');
const validateJWT = require('../auth/validateJWT');
const { createTask } = require('../controllers/taskController');

const router = express.Router();

router.route('/').post(validateJWT, createTask);

module.exports = router;
