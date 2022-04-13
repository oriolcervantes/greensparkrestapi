const express = require("express");
const router = express.Router();
const pluginController = require("./controllers/plugin.controller");

router.get("plugins", pluginController.getPlugins);
router.post("plugins", pluginController.createPlugin);
router.put("plugins", pluginController.updatePlugin);
router.delete("plugins", pluginController.deletePlugin);

module.exports = router;