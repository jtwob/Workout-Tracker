const router = require("express").Router();
const mongojs = require("mongojs");
const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ day: -1 })
    .limit(1)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    });
});

router.post("/api/workouts", (req, res) => {
  console.log(req.body);
  Workout.create(req.body).then((dbWorkout) => {
    res.json(dbWorkout);
  });
});

router.put("/api/workouts/:id", (req, res) => {
  console.log(mongojs.ObjectId(req.params.id), req.body);
  Workout.updateOne(
    {
      _id: mongojs.ObjectId(req.params.id),
    },
    {
      // $set: {
      //   totalDuration: req.body.duration,
      // },
      $push: {
        exercises: req.body,
      },
    },
    (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send({ ...data });
      }
    }
  );
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .sort({ day: -1 })
    .limit(7)
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    });
});

module.exports = router;
