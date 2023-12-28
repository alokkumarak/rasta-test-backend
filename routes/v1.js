const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');
const unverified = require('../controllers/UnverifiedUser.js');

router.get('/getDataDummy/:Username', userController.getDataDummy); 
router.post('/postData', userController.postData);

router.get('/getProfileData/:Username',userController.getData); 
router.post('/login',userController.login);




// Route to handle GET user by username
router.get('/getUnverifiedProfile/:username', unverified.getUserByUsername);


module.exports = router;