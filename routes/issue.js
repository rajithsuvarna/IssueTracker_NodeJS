//setup express and router
const express = require("express");
const router = express.Router();
const issueController = require("../controllers/issue_controller");

//router for creating issue
router.post("/create/:id", issueController.createIssue);

module.exports = router;
