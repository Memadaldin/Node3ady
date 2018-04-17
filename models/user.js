const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    userName: {
        type: String,
        lowercase: true
    },
    age: Number
   });
const User = mongoose.model('User', userSchema);
module.exports = User;



