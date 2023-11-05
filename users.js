const { text } = require('express');
const mongoose = require('mongoose');
const UsersSchema = new mongoose.Schema({
    name: String,
    role_no: Number,
    address: String,
})

module.exports = mongoose.model('users', UsersSchema);