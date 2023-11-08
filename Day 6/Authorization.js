import express from 'express'
import jwt from 'jsonwebtoken'
const AuthorizationRouter = express.Router();
import dotenv from 'dotenv'

dotenv.config()
AuthorizationRouter.use(express.json())

const Authorization = (req, res, next)=>{
    const Token = jwt.sign(req.body, process.env.KEY,{expiresIn:'30s'})
    res.locals.Token = {"Token":Token}
    req.body.Token = {"Token":Token}
    console.log(res.locals.Token)   
    next()
}
export default Authorization

