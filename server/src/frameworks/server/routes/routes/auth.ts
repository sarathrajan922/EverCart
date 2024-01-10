import express,{Request} from 'express'


const authRouter =()=>{
    const router = express.Router()

    router.get('/login',(req:Request)=>{
        console.log('api reached auth router...')
    })

    return router
}

export default authRouter;