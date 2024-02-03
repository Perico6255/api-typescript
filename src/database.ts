import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mangoCoints");
    console.log('database conected')
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
  }
};
export default connectDB;
