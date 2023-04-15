const express = require("express");
const cors = require("cors");
const app = express();
const path = require('path');
const mongoose = require("mongoose");


// Constants
const {
  HOST,
  PORT,
  SESS_SECRET,
  NODE_ENV,
  IS_PROD,
  COOKIE_NAME
} = require("./config/config");
const { MongoURI } = require("./config/database");


app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use('/', require(path.join(__dirname, "routes/admin/admin.js")));
app.use(express.static('public'));


// app.get('/login', (req, res) => {
//   res.send('Hello World!');
// });

// set the view engine to ejs
app.set('view engine', 'ejs');


// Connecting to Database
mongoose
  .connect(MongoURI, {
    useNewUrlParser: true,
    // useCreateIndex: true
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT} Open URL http://localhost:${PORT}`);
  });