import { Schema, model, models} from 'mongoose';

const workoutSchema = new Schema({
  name: String, // A descriptive name for the workout
  type: String, // The type of workout (strength, cardio, flexibility)
  date: { type: Date, default: Date.now }, // The date when workout was performed
  duration: Number, // The duration of the workout in minutes or hours
  caloriesBurned: Number, // The estimated calories burned during the workout
  exercises: [ // An array containing details about each exercise within the workout
    {
      name: String, // The name of the exercise
      sets: Number, // The number of sets performed
      reps: Number, // The number of repititions per set
      weight: Number, // The weight used (if applicable)
      duration: Number, // The duration of the exercise (cardio)
      notes: String, // Additional notes or comments about the exercise
    },
  ],
  user: { type:mongoose.Schema.Types.ObjectId, ref: 'User'}, // A reference to the user who performed the workout. This can be the user's ID
  rating: Number, // User-assigned rating for the workout
  comments: String, // User's comments or feedback on the workout
});

const Workout = models.Workout || model('Workout', workoutSchema);

export default Workout;