const router=require('express').Router()
const mongo=require('mongoose')
const conn=mongo.createConnection(process.env.mongo_conn,{ useNewUrlParser: true,useUnifiedTopology: true})
require('../models/post')
const Post=conn.model('post')
const {NormalAuth,withprofileAuth}=require('../Authentication/authenroute')

router.get('/',NormalAuth,(req,res)=>{
    
     Post.find({})
     .then(data=>{
          res.send(data)
     })
})
router.get('/withprofile',withprofileAuth,(req,res)=>{
     
    
     Post.find({uid:req.userdata.uid})
     .then(data=>{
          res.send({
               profile:req.userdata,
               data:data
          })
     })
})
module.exports=router;