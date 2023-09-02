const Project = require("../models/project");
module.exports.home = async function (req, res) {
  try {
    let projects = await Project.find({});
    return res.render("home", {
      title: "Issue Tracker | Home",
      all_projects: projects,
    });
  } catch (err) {
    console.log("Error:", err);
    return;
  }
};
