require('dotenv').config();
const express = require('express')
const app = express()
const noteRouter = require("./routes/note");

try {
  require("./db/mongoose");
  console.log("success")
} catch(e) {
  console.log("fail");
}

const port = process.env.PORT || 3000;
const host = '0.0.0.0';


app.use(express.json());
app.use(noteRouter);

app.listen(port, host, () => {
    console.log(`server is up on port ${port}`);
})