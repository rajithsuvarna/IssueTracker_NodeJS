//setup express and router
const express = require("express");
const router = express.Router();
const projectController = require("../controllers/project_controller");

//router for creating the project
router.post("/create", projectController.createProject);
//router for getting the project page
router.get("/page/:id", projectController.projectPage);

module.exports = router;
