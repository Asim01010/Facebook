import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log(`Database connected on host:${mongoose.connection.host.rainbow}`);
};
