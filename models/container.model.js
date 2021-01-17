const mongoose = require('mongoose');

const containerSchema = mongoose.Schema({
    path: {
        type: String
    },
    password: {
        type: String
    }
});
