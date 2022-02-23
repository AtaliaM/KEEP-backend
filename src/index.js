require('dotenv').config();
const express = require('express')
const app = express()
const noteRouter = require("./routes/note");

try {
  require("./db/mongoose");
  console.log("success connectiong to DB")
} catch(e) {
  console.log("failed to connect to DB");
}

const port = process.env.PORT || 7000;
const host = process.env.HOST;


app.use(express.json());
app.use(noteRouter);

app.listen(port, host, () => {
    console.log(`server is up on port ${port} and host ${host}`);
})