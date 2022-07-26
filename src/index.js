const express=require('express')
const path=require('path')

const app=express()
const port=process.env.PORT||3000

const publicDirectoryPath=path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))

app.listen(port,(req,res)=>{
    console.log(`Server is up and running at port http://localhost:${port}`);
})