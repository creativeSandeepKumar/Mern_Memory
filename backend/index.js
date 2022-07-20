const connectToMongo = require("./db");
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");



connectToMongo();

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

const port = process.env.PORT || 5000;  
app.use(cors());
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello to memory api to continue use /posts')
})
app.use('/posts', require("./routes/posts"));
  
  app.listen(port, () => {
    console.log(`Memory app listening on port http://localhost:${port}`)
  })