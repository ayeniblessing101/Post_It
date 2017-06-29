const express = require('express');

const router = express.Router();
const groupController = require('../controllers/groupController');

const userController = require('../controllers/userController');
const verifyToken = require('../middlewares/jwtauth');

router.post('/api/user/signup', userController.signup);
router.post('/api/user/signin', userController.login);
router.post('/api/group', verifyToken, groupController.create_group);
router.post('/api/group/:id/user', verifyToken, groupController.add_user);

module.exports = router;
