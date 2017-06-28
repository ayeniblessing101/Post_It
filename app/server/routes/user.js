const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.post('/api/user/signup', userController.signup);
router.post('/api/user/signin', userController.login);

module.exports = router;
