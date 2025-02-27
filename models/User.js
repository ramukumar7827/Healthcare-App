const mongoose =require('mongoose')
const {Schema}=mongoose;
const UserSchema=new Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:String,
        default:Date.now
    }
})

module.exports=mongoose.model('User',UserSchema)
