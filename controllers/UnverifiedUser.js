const UnverifiedUser = require('../models/UnverifiedModel.js');

// Controller to handle GET user by username
async function getUserByUsername(req, res) {
  const username = req.params.username;

  try {
    const user = await UnverifiedUser.findOne({ Username: username });

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error("Error retrieving user:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { getUserByUsername };