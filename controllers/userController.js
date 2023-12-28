
const userModel = require('../models/userModel.js');

exports.getData = async (req, res) => {
    try {
        const data = await userModel.findOne({ Username: req.params.Username });
        res.json(data);
    } catch (err) {
        res.json({ message: err });
    }
}

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
