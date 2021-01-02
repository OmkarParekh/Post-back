const mongoose=require('mongoose')
const Schema=mongoose.Schema;


// Craete Structure

const PostSchema=new Schema({
   
     Postname:{
          type:String,
          required:false
     },
     Description:{
        type:String,
        required:false
     },
     Uphoto:{
          type:String,
          required:true
     },
     UName:{
          type:String,
          required:true
     },
     uid:{
          type:String,
          required:true
     },
     Date:{
        type:String,
        required:true
     },
     path:{
     secure_uri:{
          type:String,
          
     },
     id:{
          type:String,
          
     }

     },
     Likes:{
          type:Number,
          required:false
     },
     Likedby:[String],
     Comments:[
          {
               email:{
                    type:String,
                    required:true,
                    unique:true
               },
               Name:{
                    type:String,
                    required:true,
                    unique:true
               },
               Comment:{
                    type:String,
                    required:true
               }
          }
     ]
     
   
});
mongoose.model('post',PostSchema)