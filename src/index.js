require('dotenv').config();
const express = require('express')
const app = express()

try {
  require("./db/mongoose");
  console.log("success")
} catch(e) {
  console.log("fail");
}

const port = process.env.PORT || 3000;
const host = '0.0.0.0';

const noteRouter = require("./routes/note");

app.use(express.json());
app.use(noteRouter);

app.listen(port, host, () => {
    console.log(`server is up on port ${port}`);
})