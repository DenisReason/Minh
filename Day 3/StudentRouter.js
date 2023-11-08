import express from 'express'
const StudentRouter = express.Router();
const StudentsList = [
    { name: "Minh", age: 18 },
    { name: "Phan", age: 18 },
    { name: "Tri", age: 18 },
    { name: "Truong", age: 18 },
]

StudentRouter.get("/students",(req, res)=>{
    res.send(StudentsList)
})
StudentRouter.get("/students/add",(req, res)=>{
    StudentsList.push({name:"StudentNew",age:"18"})
    res.send(StudentsList)
})
export default StudentRouter
