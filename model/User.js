const mongoose=require('mongoose');


const schema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    Email:{
        type:String,
        required:true,
        
    }
})



const User=mongoose.model('User',schema);










module.export= User;