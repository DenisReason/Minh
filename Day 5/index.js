import express  from "express"
import TeacherRouter from "./TeacherRouter.js"
import StudentsRouter from "./StudentRouter.js"
const app = express()


app.use(StudentsRouter)
app.use(TeacherRouter)
app.listen(3000,()=>{
    console.log("App is litsening on port 3000")
})