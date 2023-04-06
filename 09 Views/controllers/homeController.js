import {join} from 'path'
const homeController = (req,res)=>{
    // res.send("This is home page")
    // res.send("<h1>Hello</h1>")
    console.log(join(process.cwd(), 'views', 'index.html'))
    res.sendFile(join(process.cwd(), 'views', 'index.html'))
}

export {homeController}