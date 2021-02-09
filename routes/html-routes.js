const path = require("path");

module.exports = (app) => {
  app.get("/", (req, res) => {
    console.log("index");
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/exercise", (req, res) => {
    console.log("exercise");
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  app.get("/stats", (req, res) => {
    console.log("stats");
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};
