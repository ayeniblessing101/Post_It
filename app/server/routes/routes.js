const express = require('express');

const router = express.Router();
const groupController = require('../controllers/groupController');
const messageController = require('../controllers/messageController');

const userController = require('../controllers/userController');
const verifyToken = require('../middlewares/verifyToken');

router.post('/user/signup', userController.signup);
router.post('/password/forgot', userController.sendForgotPasswordToken);
router.get('/password/token/check', userController.checkToken);
router.put('/password/verify', userController.resetPassword);
router.get('/user/search', userController.search);
router.post('/user/signin', userController.login);
router.post('/group', verifyToken, groupController.createGroup);
router.get('/groups', verifyToken, groupController.getGroups);
router.post('/group/:id/user', verifyToken, groupController.addUser);
router.get('/group/:id/users', verifyToken, groupController.getUsers);
router.get('/group/:id', verifyToken, groupController.getGroup);
router.post('/group/:id/message', verifyToken, messageController.postMessage);
router.get('/group/:id/messages', verifyToken, messageController.getMessages);

module.exports = router;
