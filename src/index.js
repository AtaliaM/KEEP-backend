require('dotenv').config();
const express = require('express')
const app = express()

try {
  require("./db/mongoose");
  console.log("success")
} catch(e) {
  console.log("fail");
}

// console.log(process.env.NODE_ENV);
// const host = '0.0.0.0';

app.use(express.json());

// app.listen(port, host, () => {
//     console.log(`server is up on port ${port}`);
// })

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)