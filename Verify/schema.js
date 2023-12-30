const mongoose=require('mongoose')

const Valid=new mongoose.Schema({
  email:String,
  OTP:String
})

module.exports=mongoose.model('otp',Valid)