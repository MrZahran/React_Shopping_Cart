const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./routes/routes");

const app = express();
app.use(bodyParser.json());
app.use("/", router);

connectionString = "mongodb://localhost/react-shopping-cart";
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("Connection Done!"));

app.listen(3003, () => {
  console.log("Running on http://localhost:3003");
});
