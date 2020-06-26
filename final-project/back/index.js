let express=require('express')

let app=express();

app.get(('/'),(res,req)=>{
    res.send('hello world')
})

let server=app.listen(8080,()=>{
   
    console.log("server is liste on port :"+port)
})