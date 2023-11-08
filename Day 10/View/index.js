import express from 'express'
import {registerRouter} from '../Control/register.js';
const Main = express()


Main.use(registerRouter)
Main.listen(3000,()=>{
    console.log("App is running on port 3000");
})