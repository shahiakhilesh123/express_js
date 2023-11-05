const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node_database');
mongoose.set('strictQuery', false);