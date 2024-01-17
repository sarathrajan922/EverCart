import { Application } from "express";
import authRouter from "./routes/auth";
import userRouter from "./routes/user";

const routes = (app:Application)=>{
    app.use('/api/auth', authRouter())
    app.use('/api/user', userRouter())
}

export default routes;