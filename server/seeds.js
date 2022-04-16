const mongoose = require('mongoose');
const Plugin = require('./models/plugin.model');
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas database"))
  .catch((err) => console.error(err));

const seedPlugins = [
  {
    "type": "bottles",
    "description": "100 plastic bottles",
    "color": "var(--blue)",
    "active": false,
    "links": false
  }, {
    "type": "trees",
    "description": "10 trees",
    "color": "var(--green)",
    "active": false,
    "links": false
  }, {
    "type": "carbon",
    "description": "100kg of carbon",
    "color": "var(--beige)",
    "active": false,
    "links": false
  },
];

const seedDB = async () => {
  await Plugin.deleteMany({});
  await Plugin.insertMany(seedPlugins);
};

seedDB().then(() => {
  mongoose.connection.close();
});
