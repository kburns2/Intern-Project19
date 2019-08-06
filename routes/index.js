const searchRoutes = require("./search");
const csRoutes = require("./CScreen");
const ciRoutes = require("./CiError");
const noRoutes = require("./noRes");
const BSERoutes = require("./BadSwipeError");

const constructorMethod = app => {
  app.use("/search", searchRoutes);
  app.use("/CScreen", csRoutes);
  app.use("/CiError", ciRoutes);
  app.use("/noRes", noRoutes);
  app.use("/BadSwipeError", BSERoutes);
  app.get("/", (req, res) => {
    res.render("posts/index",{});
  });

  app.use("*", (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;
