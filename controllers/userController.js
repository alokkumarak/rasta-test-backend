
const userModel = require('../models/userModel.js');
// const ProfileSchema = require('../models/profileModel.js');
const User = require('../models/userTestModel.js');

const ProfileModel = require('../models/profileModel.js');

exports.getDataDummy = async (req, res) => {
    try {
        const data = await ProfileModel.findOne({ Username: req.params.Username });
        res.json(data);
    } catch (err) {
        res.json({ message: err });
    }
}
exports.getData = async (req, res) => {
    try {
        console.log('Received request for profile with Username:', req.params.Username);
    //   const Username = req.params.Username;
    //   console.log('Received request for profile with Username:', Username);
      const profile = await ProfileModel.findOne({ Username: req.params.Username  });
//    console.log('Received request for profile with Username:', Username);
      if (!profile) {
        return res.status(404).json({ message: 'Profile not found' });
      }
      res.json(profile);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

exports.postData = async (req, res) => {
    
    const data = new userModel({
        Username: req.body.Username,
        Password: req.body.Password,
        Email: req.body.Email
    });

    try {
        const savedData = await data.save();
        res.json(savedData);
    } catch (err) {
        res.json({ message: err });
    }
}



  exports.login = async (req, res) => {
    const { username, password } = req.body;
    console.log('Received login request with username:', username, 'and password:', password);
  
    try {
      // Find the user by email
      const user = await User.findOne({ username,password });
  
      if (!user) {
        return res.status(404).send('User not found');
      }
  
      // Simple password comparison
      if (password !== user.password) {
        return res.status(401).send('Invalid password');
      }
  
      // Include user details in the response
      const userDetails = {
        id: user._id,
        username: user.username,
        password: user.password
        // Add more user details as needed
      };
  
      res.status(200).json({ message: 'Login successful', user: userDetails });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).send('Error during login');
    }
  }
