const mongoose=require('mongoose')
const Schema=mongoose.Schema;


// Craete Structure

const UserSchema=new Schema({
   
     Fullname:{
          type:String,
          required:true
      },
     Username:{
          type:String,
          required:true,
          unique:true
      },
     Password:{
        type:String,
        required:true,
        
     },
     Email:{
          type:String,
          required:false
     },
     Phonenumber:{
        type:String,
        required:false,
        unique:true
    },
     
   
});
mongoose.model('user',UserSchema)