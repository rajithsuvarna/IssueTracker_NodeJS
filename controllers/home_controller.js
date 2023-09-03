const Project = require("../models/project");

//controller to render the home page ejs
module.exports.home = async function (req, res) {
  try {
    //getting all the created projects from the db
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
