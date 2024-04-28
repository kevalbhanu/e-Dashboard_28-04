const express = require("express");
const cors = require("cors");
const router = require("./routes/Route");
require("./db/config");
//const User=require('../models/User')
const app = express();

app.use(express.json());
app.use(cors());
app.use("/", router);

app.listen(5000, () => {
  console.log(">> Listening on PORT::5000");
});
