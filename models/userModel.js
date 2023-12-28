const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    }
}
);

module.exports = mongoose.model('dummy-user', userSchema);

