// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// require('./src/db/mongoose');

// const connectionURL = process.env.ATLAS_URI;
// const databaseName = 'KEEP'

// MongoClient.connect(connectionURL, {useNewUrlParser:true, useUnifiedTopology: true}, (error,client) => {
//     if(error) {
//         return console.log("unable to connect to database");
//     }
//     console.log("connected correctly");

//     const db = client.db(databaseName);

//     db.collection('notes').insertOne({
//         title: "My first note",
//         body: "blabla"
//     })
// })