import express from 'express'
import AuthenticationRouter from './Authentication.js'
import firm18Router from './firm18.js'
const app = express()


app.use(express.json())

app.use(AuthenticationRouter)
app.use(firm18Router)


app.listen(3000,()=>{
    console.log("App is running on port 3000");
})