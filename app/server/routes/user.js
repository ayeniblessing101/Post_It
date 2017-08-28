const express = require('express');

const router = express.Router();
const groupController = require('../controllers/groupController');
const messageController = require('../controllers/messageController');

const userController = require('../controllers/userController');
const verifyToken = require('../middlewares/jwtauth');

router.post('/user/signup', userController.signup);
router.post('/password/forgot', userController.forgotPassword);
router.get('/password/token/check', userController.checkToken);
router.post('/password/verify', userController.resetPassword);
router.get('/user/signup/:identifier', userController.identify);
router.post('/user/signin', userController.login);
router.post('/group', verifyToken, groupController.create_group);
router.get('/groups', verifyToken, groupController.get_groups);
router.post('/group/:id/user', verifyToken, groupController.add_user);
router.get('/group/:id/user', verifyToken, groupController.get_users);
router.post('/group/:id/message', verifyToken, messageController.post_message);
router.get('/group/:id/messages', verifyToken, messageController.get_messages);

module.exports = router;
