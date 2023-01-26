import express from 'express'
const router = express.Router()


// Students
router.get('/all', (req,res)=>{
    res.send("Show all student");
})
router.post('/add', (req,res)=>{
    res.send("add new student");
})
router.put('/update', (req,res)=>{
    res.send("update student");
})
router.delete('/delete', (req,res)=>{
    res.send("delete student");
})


export default router

