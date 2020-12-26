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
     id:Stfalse

     },
     Likes:{
          type:Number,
          required:false
     },
     Likedby:[
          {
               Likedbyname:{
                    type:String,
                    required:false,
                    unique:true
               }
          }
     ],
     Comments:[
          {
               Name:{
                    type:String,
                    required:false,
                    unique:true
               },
               Comment:{
                    type:String,
                    required:false
               }
          }
     ]
     
   
});
mongoose.model('post',PostSchema)