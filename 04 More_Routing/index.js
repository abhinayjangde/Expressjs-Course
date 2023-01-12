const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/contact', (req, res) => {
    res.send('Contact page')
})
app.get('/subscribe', (req, res) => {
    res.send('subscribe page')
})

app.all('/api/*', (req, res) => {
    res.send("all api/*")
})
app.get('/ab?cd', (req, res) => {
    res.send('This route path will match acd and abcd')
})

app.get(/a/, (req, res) => {
    res.send('If string is contain a then run')
})

app.route('/student')
.get((req,res)=>{
    res.send('All student')
})
.post((req,res)=>{
    res.send('add student')
})
.put((req,res)=>{
    res.send('update student')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})