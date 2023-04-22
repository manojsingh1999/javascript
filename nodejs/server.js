
//imports
import  express  from "express";

//rest object

const app = express()

//routes

app.get('/',(req,res)=>{

    res.send('<h1>Welcome too job portal</h1>')

})

app.listen(8000,()=>{
    console.log('node server running')
})