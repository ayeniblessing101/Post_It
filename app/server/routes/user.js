const express = require('express');

const router = express.Router();
const groupController = require('../controllers/groupController');
const messageController = require('../controllers/messageController');

const userController = require('../controllers/userController');
const verifyToken = require('../middlewares/jwtauth');

router.post('/api/user/signup', userController.signup);
router.get('/api/user/signup/:identifier', userController.identify);
router.post('/api/user/signin', userController.login);
router.post('/api/group', verifyToken, groupController.create_group);
router.get('/api/groups', verifyToken, groupController.get_groups);
router.post('/api/group/:id/user', verifyToken, groupController.add_user);
router.post('/api/group/:id/message', verifyToken, messageController.post_message);
router.get('/api/group/:id/messages', verifyToken, messageController.get_messages);

module.exports = router;
