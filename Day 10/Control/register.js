import express, { json } from "express"
import { CreateUserAccount, GetuserByUsername } from "../Model/ConnectToDb.js"
<<<<<<< HEAD
import bcrypt from 'bcryptjs'

=======
import bcrypt from 'bcrypt'
>>>>>>> 019ba310eb9cfd315441e97df0288cba4e701fc1
export const registerRouter = express.Router()


registerRouter.use(express.json())

registerRouter.post("/Register", async (req, res, next)=>{
    const isUsernameAlready =await GetuserByUsername(req.body.username)
    console.log(isUsernameAlready);
    if(isUsernameAlready){
        res.status(409).send("This account has already existed")
        return
    }
    const salt = await bcrypt.genSalt(10);
    const password  = await bcrypt.hash(req.body.password, salt)
<<<<<<< HEAD
    await CreateUserAccount({"username":req.body.username,"password":password})
    res.status(200).send("done")
}
)
=======
    const isAlreadyExist = await GetuserByUsername(req.body.username)
    if(isAlreadyExist){
        res.status(403).send("username already exist")
        return
    }
    await CreateUserAccount({"username":req.body.username,"password":password})
    res.send("done")
})

>>>>>>> 019ba310eb9cfd315441e97df0288cba4e701fc1
