const Project = require("../models/project");
const Issue = require("../models/issue");
const { findById } = require("../models/project");

//controller to create issue
module.exports.createIssue = async function (req, res) {
  try {
    //get the project using id
    let project = await Project.findById(req.params.id);
    if (project) {
      //create the issue and store in db with value received from the form
      let issue = await Issue.create({
        title: req.body.title,
        description: req.body.description,
        labels: req.body.labels,
        author: req.body.author,
      });
      //add the issue to the project db
      project.issues.push(issue);

      //adding the label to the project db
      if (!(typeof req.body.labels === "string")) {
        for (let label of req.body.labels) {
          let isPresent = project.labels.find((obj) => obj == label);
          if (!isPresent) {
            project.labels.push(label);
          }
        }
      } else {
        let isPresent = project.labels.find((obj) => obj == req.body.labels);
        if (!isPresent) {
          project.labels.push(req.body.labels);
        }
      }
      //saving the project db with values
      await project.save();
      return res.redirect(`back`);
    } else {
      return res.redirect("back");
    }
  } catch (err) {
    return res.redirect("back");
  }
};
