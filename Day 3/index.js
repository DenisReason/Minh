import express from 'express'
import  StudentRouter  from './StudentRouter.js'
import TeacherRouter  from './TeacherRouter.js'
const app = express()

app.get("/Home", (req, res) => {
    res.send("Hello world")
})
app.use(StudentRouter)
app.use(TeacherRouter)




app.listen(3000, () => {
    console.log("App is listenning on port 3000")
})
