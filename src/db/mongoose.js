const mongoose = require('mongoose');
const Note = require('../models/note');

let MONGODB_URI = process.env.ATLAS_URI;
console.log(`MONGODB URI ${MONGODB_URI}`)

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const note = new Note({
        title: 'first note',
        body: 'body',
    });
note.save().then((note) => {
    console.log(note)
}).catch((e) => { console.log(e) })