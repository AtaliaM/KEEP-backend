const mongoose = require('mongoose');

const Note = mongoose.model('Note', {
    title: {
        type: String,
        trim: true
    },
    body: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = Note