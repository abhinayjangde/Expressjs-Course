
const allStudent = (req,res)=>{
    res.send("All students");
}

const deleteStudent = (req,res)=>{
    console.log(req.params)
    const {id} = req.params;
    if(id == 10){
        res.send("Connot delete this student.");
    }
    else{
        res.send(`Student deleted ${id}`)
    }
}


export {allStudent, deleteStudent}
// module.exports {allStudent, deleteStudent}