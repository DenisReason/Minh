import express from 'express'
import fs from 'fs'
import Authorization from './Authorization.js'
const AuthenticationRouter = express.Router()
AuthenticationRouter.use(express.json())



const Authentication = (req, res, next) => {
    try {
        const Data = fs.readFileSync("./Users.js", 'utf-8')
        const UserList = JSON.parse(Data)
        for (let i = 0; i < UserList.length; i++) {
            if (UserList[i].Username == req.body.Username && UserList[i].password == req.body.password) {
                console.log("ok")
                break
            }
            else if (i == UserList.length - 1) {
                res.send("Password or username  incorrect!!")
                return
            }
        }
        res.locals.status = {"status":"Access!"}
        next()
    } catch (error) {
        console.log(error)
    }
}


AuthenticationRouter.post("/Login",Authentication,Authorization,(req, res, next)=>{
    res.send("Authorization successfuly!")
})


export default AuthenticationRouter