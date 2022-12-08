import express from 'express'
const app = express()
const port = 3000

app.get('/', (req,res)=>{
    res.status(200).send("Abhi Bhaiya - Express.js Course")
})

app.listen(port, ()=>{
    console.log(`Server is listening at http://localhost:${port}`)
})