const router=require('express').Router()
const mongo=require('mongoose')
const conn=mongo.createConnection(process.env.mongo_conn,{ useNewUrlParser: true,useUnifiedTopology: true})
require('../models/post')
const Post=conn.model('post')
router.get('/',(req,res)=>{
    
     Post.find({})
     .then(data=>{
          res.send(data)
     })
})
module.exports=router;