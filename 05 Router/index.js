import express from 'express'
const app = express()
const port = 3000
import stu from './routes/student.js'
import tech from './routes/teacher.js'

app.get('/', (req,res)=>{
    res.status(200).send("Abhi Bhaiya - Express.js Course")
})

app.use('/student',stu)
app.use('/teacher',tech)

app.listen(port, ()=>{
    console.log(`Server is listening at http://localhost:${port}`)
})