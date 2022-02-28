const mongoose = require('mongoose');

let MONGODB_URI = process.env.ATLAS_URI;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})