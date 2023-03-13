const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/student/create', (req,res)=>{
    res.send("new student created")
})
app.post('/student/post', (req,res)=>{
    res.send("post method is fired")
})
app.put('/student/update', (req,res)=>{
    res.send("student updated")
})
app.delete('/student/delete', (req,res)=>{
    res.send("deleted")
})

app.patch('/student/patch', (req,res)=>{
    res.send("Patch")
})

// app.get('/single', (req,res)=>{
//     console.log("single callback")
//     res.send("single hoon main")
// })
// app.get('/single', (req,res, next)=>{
//     console.log("single callback")
//     next()
// }, (req,res)=>{
//     console.log("second callback")
//     res.send("second callback")
// })

const func1 = (req,res, next)=>{
    console.log('first')
    next()
}
const func2 = (req,res, next)=>{
    console.log('second')
    next()
}
const func3 = (req,res)=>{
    console.log('third')
    res.send("Hello I am array of callbacks")
}

app.get('/single',[func1, func2 , func3])

app.all('/kuchbhi', (req,res)=>{
    res.send("kuch bhi")
})

app.listen(port, ()=> {
  console.log(`Example app listening on port ${port}`)
})