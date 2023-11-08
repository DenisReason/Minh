import express, { json } from "express"
import { CreateUserAccount } from "../Model/ConnectToDb.js"
import bcrypt from 'bcrypt'
import jsonparser from 'jsonparser'
export const registerRouter = express.Router()

registerRouter.use(express.json())

registerRouter.post("/Register", async (req, res, next)=>{


    console.log(req.body)
    const salt = await bcrypt.genSalt(10);
    const password  = await bcrypt.hash(req.body.newpassword, salt)
    await CreateUserAccount({"username":req.body.newusername,"password":password})
    res.send("done")
})
