import { Schema, models, model } from "mongoose";
// import mongoose from "mongoose";

const userSchema = new Schema({
  username: String,
  email: String,
  workouts: [{ type: Schema.Types.ObjectId, ref: 'Workout'}] // create a workout Schema. This references that Schema.
});

const User = models.User || model('User', userSchema);

export default User;