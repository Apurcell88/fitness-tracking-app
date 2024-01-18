import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect('mongodb+srv://apurcell88:cubs1988@cluster0.8rkyrqo.mongodb.net/', {
      dbName: 'fitness_app',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;
    console.log('MongoDB connected')
  } catch (err) {
    console.log(err);
  }
}