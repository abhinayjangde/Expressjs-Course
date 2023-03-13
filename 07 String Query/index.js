import express from 'express'
const app = express()
const port = 3000

app.get('/', (req,res)=>{
    res.status(200).send("Abhi Bhaiya - Express.js Course")
})
app.get('/product', (req,res)=>{
    console.log(req.query)
    const {category, price} = req.query
    res.send(`Query String Ok category: ${category} and price: ${price}`)
})

app.listen(port, ()=>{
    console.log(`Server is listening at http://localhost:${port}`)
})