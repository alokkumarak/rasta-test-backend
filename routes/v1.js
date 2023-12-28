const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');

// router.get('/getData/:Username', userController.getData); 
router.post('/postData', userController.postData);

router.get('/getProfileData/:Username',userController.getData); 
router.post('/login',userController.login);

module.exports = router;