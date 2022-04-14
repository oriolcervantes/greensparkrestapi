const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3001;
const cors = require("cors");
require("dotenv").config();
const router = require("./router");

const corsConfig = {
  origin: "http://localhost:3000",
  credentials: true,
}

//Middlewares
app.use(cors(corsConfig));
app.use(express.json());
app.use(router);


//MongoDB Atlas connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

//Server initialization
app.listen(PORT, () => {
  console.log(`Server up and running on http://localhost:${PORT}`);
})