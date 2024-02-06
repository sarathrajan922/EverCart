import dotenv from "dotenv";
dotenv.config();

const configKeys = {
  MONGO_DB_URL: process.env.DATABASE as string,

  PORT: process.env.PORT,

  DB_NAME: process.env.DB_NAME as string,

  JWT_SECRET: process.env.JWT_SECRET as string,

  RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID as string,
  
  RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET as string,
};

export default configKeys;
