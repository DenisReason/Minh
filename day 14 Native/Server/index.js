import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
const students = [
    {name:"Minh",age:18},
    {name:"tri",age:18}
]

app.get('/Student',(req, res)=>{
    res.json(students)
})

app.post('login',()=>{})
app.post('register',()=>{})

app.listen(3000,()=>{
    console.log("app is running on port 3000")
})