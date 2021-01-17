const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
    originalname: {
        type: String
    },
    fieldname: {
        type: String
    },
    encoding: {
        type: String
    },
    mimeType: {
        type: String
    },
    destination: {
        type: String
    },
    fileName: {
        type: String
    },
    path: {
        type: String
    },
    size: {
        type: Number
    },
    userId: {
        type: String
    }
});

module.exports = mongoose.model('File', fileSchema);
