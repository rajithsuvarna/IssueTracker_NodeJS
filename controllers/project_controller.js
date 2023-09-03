const Project = require("../models/project");
const Issue = require("../models/issue");
const { findById } = require("../models/project");

// create a project for the user
module.exports.createProject = async function (req, res) {
  try {
    await Project.create({
      name: req.body.name,
      description: req.body.description,
      author: req.body.author,
    });
    return res.redirect("back");
  } catch (err) {
    console.log(err);
    return res.redirect("back");
  }
};

// find project and display it in the project page
module.exports.projectPage = async function (req, res) {
  try {
    let project = await Project.findById(req.params.id).populate({
      path: "issues",
    });
    if (project) {
      return res.render("project_page", {
        title: "Project Page",
        project: project,
      });
    }
    return res.redirect("back");
  } catch (err) {
    console.log(err);
    return res.redirect("back");
  }
};

// create issue
