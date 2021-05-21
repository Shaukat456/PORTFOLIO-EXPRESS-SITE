const express=require('express')
const router =express();


router.get('*',(req,res)=>{
    res.send(` <h1> The url ${req.originalUrl} does not exist </h1> `)
})

router.listen(80,()=>{
    console.log('listening on  port 80')
})