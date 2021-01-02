const mongoose=require('mongoose')
const Schema=mongoose.Schema;


// Craete Structure

const UserSchema=new Schema({
     photo:{
          type:String,
          required:true
     },
     uid:{
          type:String,
          required:true,
          unique:true
       
     },
     email:{
          type:String,
          required:true,
     },
     Name:{
          type:String,
          required:true
     },
     password:{
          type:String,
          required:false
     }

    
     
   
});
mongoose.model('ouser',UserSchema)