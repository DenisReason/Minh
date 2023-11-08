import express from 'express'
import {registerRouter} from '../Control/register.js';
import { login } from '../Control/login.js';
const Main = express()


Main.use(registerRouter)
Main.use(login)
Main.listen(3000,()=>{
    console.log("App is running on port 3000");
})