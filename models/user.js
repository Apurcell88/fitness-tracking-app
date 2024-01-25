import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  username: String,
  email: String,
  workouts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workout'}] // create a workout Schema. This references that Schema.
});

const User = models.User || model('User', userSchema);

export default User;