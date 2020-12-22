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
          type:String,
          required:true
     },
     Likes:{
          type:Number,
          required:false
     },
     Likedby:[
          {
               Likedbyname:{
                    type:String,
                    required:true
               }
          }
     ],
     Comments:[
          {
               Name:{
                    type:String,
                    required:true
               },
               Comment:{
                    type:String,
                    required:true
               }
          }
     ]
     
   
});
mongoose.model('post',PostSchema)