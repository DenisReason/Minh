import express from 'express'
import StudentsRouter from './StudentRouter.js'
import TeacherRouter from './TeacherRouter.js'
const app = express()

app.use(TeacherRouter)
app.use(StudentsRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT,(req, res)=>{
   console.log("App is lisenning on port 3000")
})