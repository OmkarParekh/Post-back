const router=require('express').Router()
const mongo=require('mongoose')
const {NormalAuth}=require('../Authentication/authenroute')
const conn=mongo.createConnection(process.env.mongo_conn,{ useNewUrlParser: true,useUnifiedTopology: true})
require('../models/post')
const Post=conn.model('post')
const cloudinary=require('cloudinary')
router.post('/:id/:pid',NormalAuth,(req,res)=>{
     Post.findOneAndDelete({'_id':req.params.id})
     .then(async ()=>{

          const deleteimage=await cloudinary.uploader.destroy(req.params.pid,options={});

          console.log('Post Deleted')
          res.send({
               'status':'Post Deleted'
          })
          

     })
})
module.exports=router;         


