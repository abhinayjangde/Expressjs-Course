import express from 'express'
const app = express()
const port = 3000

app.get('/', (req,res)=>{
    res.status(200).send("Abhi Bhaiya - Express.js Course")
})
// app.get('/student/:id', (req,res)=>{
//     console.log(req.params.id)
//     res.send("student route is ok.")
// })
// app.get('/student/:id/:classs', (req,res)=>{

//     // console.log(req.params.id, req.params.class)
//     const {id,classs} = req.params
//     console.log(id,classs)
//     res.send("student/class route is ok.")
// })

// app.get('/product/:category/and/:id', (req,res)=>{
//     console.log("category: " ,req.params.category,"Id: ", req.params.id)
//     res.send("Product and category")
// })

// app.get('/tour/:from-:to', (req,res)=>{
//     const {from,to} = req.params
//     console.log(from , "To ", to)
//     res.send("Tour")
// })
// app.get('/:state.:city', (req,res)=>{
//     res.send(req.params)
// })

// app.get('/student/:id([0-9]{2})', (req,res)=>{
//     res.send(req.params)
// })
// app.get('/year/:month([a-z]{3})', (req,res)=>{
//     res.send(req.params)
// })
// app.get('/news/:category(post|article)', (req,res)=>{
//     res.send(req.params)
// })

app.param(['id','name'], (req,res, next, val,v)=>{
    console.log("id:",val)
    console.log("name:", v)
    next()
})
app.get("/student/:id/:name", (req,res)=>{
    console.log(req.params)
    res.send(req.params)
})
app.listen(port, ()=>{
    console.log(`Server is listening at http://localhost:${port}`)
})