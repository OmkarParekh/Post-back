const router=require('express').Router()
const mongo=require('mongoose')
const conn=mongo.createConnection(process.env.mongo_conn,{ useNewUrlParser: true,useUnifiedTopology: true})
require('../models/post')
const Post=conn.model('post')
const {postupdateauth, NormalAuth}=require('../Authentication/authenroute')

router.post('/:id',postupdateauth,(req,res)=>{
     const data=req.body
     const user=req.userdata.uid
     
     Post.findOneAndUpdate({_id:req.params.id,uid:user},{
          Postname:data.Postname,
          Description:data.Description,
          Date:data.Date
     })
     .then(data=>{
          res.send(data)
     })
})
router.get('/fetch/:id',NormalAuth,(req,res)=>{
    
     Post.findOne({_id:req.params.id})
     .then(data=>{
          res.send(data)
     })
})
module.exports=router;