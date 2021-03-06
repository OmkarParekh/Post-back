const router=require('express').Router()
const mongo=require('mongoose')
const conn=mongo.createConnection(process.env.mongo_conn,{ useNewUrlParser: true,useUnifiedTopology: true})
require('../models/post')
const Post=conn.model('post')
const {NormalAuth}=require('../Authentication/authenroute')

router.get('/:id',(req,res)=>{
    
     Post.findOne({_id:req.params.id})
     .then(data=>{
          res.send(data)
     })
})

module.exports=router;