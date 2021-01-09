const router=require('express').Router()
const mongo=require('mongoose')
const conn=mongo.createConnection(process.env.mongo_conn,{ useNewUrlParser: true,useUnifiedTopology: true})
require('../models/post')
const Post=conn.model('post')
const {NormalAuth}=require('../Authentication/authenroute')

router.post('/:id',NormalAuth,(req,res)=>{
     const data=req.body
     Post.findOneAndUpdate({_id:req.params.id},{
          Postname:data.Postname,
          Description:data.Description,
          Date:data.Date
     })
     .then(data=>{
          res.send(data)
     })
})
module.exports=router;