import express  from "express"
const StudentsRouter = express.Router()

const StudentsList = [
    { name: "Minh", age: 18 },
    { name: "Phan", age: 18 },
    { name: "Tri", age: 18 },
    { name: "Truong", age: 18 },
]

// MIDDLEWARE
const logTime = (req, res,next)=>{
    console.log("request at ",new Date())
    next()
}

StudentsRouter.get("/student",logTime,(req, res)=>{
    res.send(StudentsList)
})

export default StudentsRouter
