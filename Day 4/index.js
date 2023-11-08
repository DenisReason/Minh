import express from 'express'
import StudentsRouter from './StudentRouter.js'
import TeacherRouter from './TeacherRouter.js'
const app = express()

app.use(TeacherRouter)
app.use(StudentsRouter)


app.listen(3000,(req, res)=>{
   console.log("App is lisenning on port 3000")
})