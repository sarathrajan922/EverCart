import mongoose from "mongoose";
mongoose.set("strictQuery", true);

import configKeys from "../../../config";


const connectDB = async () => {

    try {
      await mongoose.connect(configKeys.MONGO_DB_URL, {
        dbName: configKeys.DB_NAME,
      });
      console.log(`Database connected`);
    } catch (error: any) {
      console.log(error);
      process.exit(1);
    }
  };
  
  export default connectDB;