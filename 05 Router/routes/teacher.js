import express from 'express'
const router = express.Router()


// Teachers
router.get('/all', (req,res)=>{
    res.send("Show all teacher");
})
router.post('/add', (req,res)=>{
    res.send("add new teacher");
})
router.put('/update', (req,res)=>{
    res.send("update teacher");
})
router.delete('/delete', (req,res)=>{
    res.send("delete teacher");
})


export default router