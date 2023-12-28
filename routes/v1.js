const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');

router.get('/getData/:Username', userController.getData); 
router.post('/postData', userController.postData);

module.exports = router;