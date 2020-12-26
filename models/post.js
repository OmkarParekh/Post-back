const mongoose=require('mongoose')
const Schema=mongoose.Schema;


// Craete Structure

const PostSchema=new Schema({
   
     Postname:{
          type:String,
          required:true
     },
     Description:{
        type:String,
        required:true
     },
     Username:{
          type:String,
          required:true
     },
     Date:{
        type:String,
        required:true
     },
     path:{
         
     secure_uri:String,
     id:String

     },
     Likes:{
          type:Number,
          required:true
     },
     Likedby:[
          {
               Likedbyname:{
                    type:String,
                    required:true,
                    unique:true
               }
          }
     ],
     Comments:[
          {
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