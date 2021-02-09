const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  excercises: [
    {
      type: {
        type: String,
        required: "What is the type of workout.",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter the name for the workout.",
      },
      duration: {
        type: Number,
        required: "Enter the workout duration in minutes.",
      },
      weight: {
        type: Number,
        required: "Enter the weight used for this workout.",
      },
      reps: {
        type: Number,
        required: "Enter the number of reps in this workout.",
      },
      sets: {
        type: Number,
        required: "Enter the number of sets in this workout.",
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
