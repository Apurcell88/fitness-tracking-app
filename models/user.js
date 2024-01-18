import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  fullName: String,
  dob: Date,
  height: Number,
  weight: Number,
  goalweight: Number,
  workouts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workout'}] // create a workout Schema. This references that Schema.
});

const User = models.Game || model('User', userSchema);

export default User;