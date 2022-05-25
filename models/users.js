const mongoose = require('mongoose');

const users = new mongoose.Schema({
    id:{
        type: String,
        required:true 
    },
    username: {
        type: String,
        required:true },
    password:{
        type: String,
        required:true
    }
})

module.exports = mongoose.model('Users',users)