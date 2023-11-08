import  express  from "express";

const TeacherRouter = express.Router()
const TeacherList = [
    {name:"Teacher1",class:"B"},
    {name:"Teacher2",class:"C"},
    {name:"Teacher3",class:"D"},
    {name:"Teacher4",class:"F"},
]
TeacherRouter.get('/Teacher',(req, res)=>{
    res.send(TeacherList);
})
TeacherRouter.get('/Teacher/add',(req, res)=>{
    TeacherList.push({name:"Teacher5",class:"F"})
    res.send(TeacherList);
})

export default TeacherRouter
