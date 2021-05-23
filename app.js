const express=require('express')
const router =express();
const User=require('./model/User')
const path=require('path')



router.use(express.json())
router.use(express.urlencoded({extended:false}))




router.set('view engine ','hbs')

// router.get('*',(req,res)=>{
//     res.send(` <h1> The url ${req.originalUrl} does not exist </h1> `)
// })






router.get('/',(req,res)=>{
 res.render('index')
})









router.post('/', async (req,res)=>{
    //
    const {email,Name}=req.body;


try {
    
    const SavingUserInfo=new User(
        { Email:email,
         name:Name}
         )
         const saved= await SavingUserInfo.save();
 
         return res.send('saved')
 
 
} catch (error) {
    console.log(error)    
}

})




router.listen(80,()=>{
    console.log('listening on  port 80')
})