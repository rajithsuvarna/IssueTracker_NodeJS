const express = require("express");
const router = express.Router();
const projectController = require("../controllers/project_controller");

router.post("/create", projectController.createProject);
router.get("/page/:id", projectController.projectPage);

module.exports = router;
