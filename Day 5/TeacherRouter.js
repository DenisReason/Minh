import express from 'express'
import fs from "fs"
const TeacherRouter = express.Router()

const ReadSubject = (req, res, next)=>{
    try {
        const data = fs.readFileSync("Subject.js",'utf-8')
        const subjectData = JSON.parse(data)
        console.log(subjectData)
        for(let i =0;i<subjectData.length;i++){
            if(req.query.api_key == subjectData[i].apiKey){
                subjectData[i].subject +=1
                fs.writeFileSync("Subject.js",JSON.stringify(subjectData))
                next()
            }
        }
        
        next()
    } catch (error) {
        console.log(error)
        return
    }
}

const TeacherList = [
    { username: 'alice', apiKey: "alice@123" },
    { username: 'bob', apiKey: "bob@123" },
    { username: 'charlie', apiKey: "charlie@123" }
]

const LogSubject = (req, res, next)=>{
   console.log("req is send at" ,new Date());
   next()
}
const CheckApiKey = (req, res, next) => {
    if (!req.query.api_key) {
        res.send("Api_key is missing")
        return
    }
    for(let i = 0;i<TeacherList.length;i++){
            if(req.query.api_key == TeacherList[i].apiKey){
                break
            }
            else if(req.query.api_key !=TeacherList[i].apiKey && i==TeacherList.length-1){
                res.send("api_key is does not exist")
                return
            }
    }
    next()
}
TeacherRouter.get("/Teacher",LogSubject,  CheckApiKey, ReadSubject, (req, res, next) => {
    res.send(TeacherList)
})


export default TeacherRouter
