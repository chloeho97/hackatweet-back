const mongoose = require("mongoose");

const connectionString = "mongodb+srv://chloeho:bUSh6Uo5RSbprfmV@cluster0.wuwvx.mongodb.net/hackatweet"

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));
