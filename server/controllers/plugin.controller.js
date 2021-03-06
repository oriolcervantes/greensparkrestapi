const pluginSchema = require("../models/plugin.model");

const getPlugins = async (req, res) => {
  try {
    const plugins = await pluginSchema.find();
    res.status(200).send(plugins);
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: "400", message: "Could not get badges" });
  }
}

const createPlugin = async (req, res) => {
  try {
    const plugin = await pluginSchema(req.body).save();
    res.status(201).send(plugin);
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: "400", message: "Could not create plugin" });
  }
}

const updatePlugin = async (req, res) => {
  try {
    const { id, prop, value } = req.body;
    const updatedPlugin = await pluginSchema.updateOne({ _id: id }, { [prop]: value });
    res.status(200).send(updatedPlugin);
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: "400", message: "Could not update plugin" });
  }
}

const deletePlugin = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedPlugin = await pluginSchema.deleteOne({ _id: id });
    res.status(200).send(deletedPlugin);
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: "400", message: "Could not update plugin" });
  }
}

module.exports = { getPlugins, createPlugin, updatePlugin, deletePlugin }