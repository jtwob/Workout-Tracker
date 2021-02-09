const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
  Workout.find()
    .sort({ date: -1 })
    .limit(1)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    });
});

router.put("/api/workouts/:id", (req, res) => {});

module.exports = router;
