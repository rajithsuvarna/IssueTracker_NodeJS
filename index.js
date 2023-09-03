const express = require("express");
const port = 8000;
const db = require("./config/mongoose");
const expressLayouts = require("express-ejs-layouts");
const sassMiddleware = require("node-sass-middleware");

const app = express();

app.use(expressLayouts);

app.use(express.urlencoded());
app.use(express.static("./assets"));

app.use(
  sassMiddleware({
    src: "./assets/scss",
    dest: "./assets/css",
    debug: true,
    outputStyle: "expanded",
    prefix: "/css",
  })
);

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
