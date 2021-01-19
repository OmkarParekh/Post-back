const jwt =require('jsonwebtoken')
const mongo=require('mongoose')
const conn=mongo.createConnection(process.env.mongo_conn,{ useNewUrlParser: true,useUnifiedTopology: true})
require('../models/oauth')
const OUser=conn.model('ouser')
const CreatepostAuth=(req,res,next)=>{
     if(req.header("Authorization")){
          const token = req.header("Authorization").split(" ")[1];
          // console.log(token);
          if(token===undefined){
               res.send('Please Provide Token')
          }
          else{
               const data = jwt.verify(token, process.env.jwt_code);
          OUser.findOne({uid:data.uid})
          .then(Response=>{

               if(Response===null){
                    res.send('UnAuthorized')
               }
               else{
                    req.userdata={
                         Uphoto:Response.photo,
                         UName:Response.Name,
                         uid:Response.uid
                    }
                    next()
               }             
          })  
          .catch(err=>{
               console.log(err);
          })
          }
     }
     else{
          res.send('UnAuthorized')
     }
     
     
     
}
const NormalAuth=(req,res,next)=>{
     if(req.header("Authorization")){
          const token = req.header("Authorization").split(" ")[1];
          // console.log(token);
          if(token===undefined){
               res.send('Please Provide Token')
          }
          else{
               const data = jwt.verify(token, process.env.jwt_code);
          OUser.findOne({uid:data.uid})
          .then(Response=>{
               if(Response===null){
                    res.send('UnAuthorized')
               }
               else{
                    next()
               }              
          })  
          .catch(err=>{
               console.log(err);
          })
          }
     }
     else{
          res.send('UnAuthorized')
     }    
}
const postupdateauth=(req,res,next)=>{
     if(req.header("Authorization")){
          const token = req.header("Authorization").split(" ")[1];
          // console.log(token);
          if(token===undefined){
               res.send('Please Provide Token')
          }
          else{
               const data = jwt.verify(token, process.env.jwt_code);
          OUser.findOne({uid:data.uid})
          .then(Response=>{
               if(Response===null){
                    res.send('UnAuthorized')
               }
               else{
                    req.userdata={
                         uid:data.uid
                    }
                    next()
               }              
          })  
          .catch(err=>{
               console.log(err);
          })
          }
     }
     else{
          res.send('UnAuthorized')
     }    
}
const withprofileAuth=(req,res,next)=>{
     if(req.header("Authorization")){
          const token = req.header("Authorization").split(" ")[1];
          // console.log(token);
          if(token===undefined){
               res.send('Please Provide Token')
          }
          else{
               const data = jwt.verify(token, process.env.jwt_code);
          OUser.findOne({uid:data.uid})
          .then(Response=>{
               if(Response===null){
                    res.send('UnAuthorized')
               }
               else{
                    req.userdata={
                         Uphoto:Response.photo,
                         UName:Response.Name,
                         uid:Response.uid,
                         email:Response.email,
                         description:'For Developement Purpose'
                    }
                    next()
               }              
          })  
          .catch(err=>{
               console.log(err);
          })
          }
     }
     else{
          res.send('UnAuthorized')
     }    
}

const commentAuth=(req,res,next)=>{
     if(req.header("Authorization")){
          const token = req.header("Authorization").split(" ")[1];
          // console.log(token);
          if(token===undefined){
               res.send('Please Provide Token')
          }
          else{
               const data = jwt.verify(token, process.env.jwt_code);
          OUser.findOne({uid:data.uid})
          .then(Response=>{

               if(Response===null){
                    res.send('UnAuthorized')
               }
               else{
                    req.userdata={
                         email:Response.email,
                         Name:Response.Name,
                    }
                    next()
               }       
          })  
          .catch(err=>{
               console.log(err);
          })
          }
     }
     else{
          res.send('UnAuthorized')
     }
     
     
     
}
const likeAuth=(req,res,next)=>{
     if(req.header("Authorization")){
          const token = req.header("Authorization").split(" ")[1];
          // console.log(token);
          if(token===undefined){
               res.send('Please Provide Token')
          }
          else{
               const data = jwt.verify(token, process.env.jwt_code);
          OUser.findOne({uid:data.uid})
          .then(Response=>{

               if(Response===null){
                    res.send('UnAuthorized')
               }
               else{
                    req.userdata={
                         email:Response.email,
                       
                    }
                    next()
               }       
          })  
          .catch(err=>{
               console.log(err);
          })
          }
     }
     else{
          res.send('UnAuthorized')
     }
     
     
     
}

module.exports ={
               CreatepostAuth,
               commentAuth,
               NormalAuth,
               likeAuth,
               withprofileAuth,
               postupdateauth
          };





