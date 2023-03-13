import express from 'express'
const app = express()
const port = 3000
import student from './routes/student.js'

app.get('/', (req,res)=>{
    res.status(200).send("Abhi Bhaiya - Express.js Course")
})

app.use('/student', student)


app.listen(port, ()=>{
    console.log(`Server is listening at http://localhost:${port}`)
})