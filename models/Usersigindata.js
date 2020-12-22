const mongoose=require('mongoose')
const Schema=mongoose.Schema;


// Craete Structure

const UserSchema=new Schema({
   
     Name:{
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
     Phonenumber:{
        type:String,
        required:false,
       
    },
     
   
});
mongoose.model('user',UserSchema)