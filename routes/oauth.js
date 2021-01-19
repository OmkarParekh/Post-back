const router=require('express').Router()
const jwt=require('jsonwebtoken')
const mongo=require('mongoose')
const conn=mongo.createConnection(process.env.mongo_conn,{ useNewUrlParser: true,useUnifiedTopology: true})
require('../models/oauth')
const GUser=conn.model('ouser')
// const { CreatepostAuth }=require('../Authentication/authenroute.js')
router.post('/',(req,res)=>{
     const data={
          uid:req.body.uid,
          photo:req.body.photo,
          Name:req.body.Name,
          email:req.body.email,


     }
     GUser.findOne({uid:data.uid})
     .then(r=>{
          if(r===null){
               new GUser(data).save()
               .then(async (d)=>{
                    const token= await jwt.sign(data, process.env.jwt_code)
                    res.send({
                         status:'User Created',
                         token:token,
                         Name:data.Name,
                         email:data.email,
                         photo:data.photo
                    })
               })
          }
          else{

               const token= jwt.sign(data, process.env.jwt_code)
                    res.send({
                         status:'User Found',
                         token:token,
                         Name:data.Name,
                         email:data.email,
                         photo:data.photo,
                       


                    })      
          }
     })
     .catch(err=>{
          console.log(err);
     })

})


module.exports=router;