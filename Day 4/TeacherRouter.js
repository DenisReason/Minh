import express from 'express'
const TeacherRouter = express.Router()


const TeacherList = [
    {name:"Teacher1",class:"B"},
    {name:"Teacher2",class:"C"},
    {name:"Teacher3",class:"D"},
    {name:"Teacher4",class:"F"},
]

const CheckApiKey = (req, res, next)=>{
    if(!req.query.api_key){
        res.send("Api_key is missing")
        return
    }
    next()
}
TeacherRouter.get("/Teacher",CheckApiKey,(req, res, next)=>{
    res.send(TeacherList)
})

export default TeacherRouter
