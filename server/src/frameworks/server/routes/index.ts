import { Application,Request } from "express";

const routes = (app:Application)=>{
    app.use('/api/auth',(req:Request)=>{
        console.log(req.url+ 'call reached index routes ....')
    })
}

export default routes;