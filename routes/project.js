const express = require("express");
const router = express.Router();
const projectController = require("../controllers/project_controller");

router.post("/create", projectController.create);
router.get("/page/:id", projectController.project);
router.post("/:id", projectController.createIssue);

module.exports = router;