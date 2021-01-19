const router=require('express').Router()
const mongo=require('mongoose')
const {postupdateauth}=require('../Authentication/authenroute')
const conn=mongo.createConnection(process.env.mongo_conn,{ useNewUrlParser: true,useUnifiedTopology: true})
require('../models/post')
const Post=conn.model('post')
const cloudinary=require('cloudinary')
router.post('/:id/:pid',postupdateauth,(req,res)=>{
     const user=req.userdata.uid
     if(req.params.pid==='Nophoto')
     {
          Post.findOneAndDelete({'_id':req.params.id,uid:user})
          .then(async (data)=>{
               console.log(data);
               if(data===null)
               {
                    res.send('Unauth')
               }
               else{
                    console.log('Post Deleted')
                    res.send({
                         'status':'Post Deleted'
                    })
               }
          })
          .catch(err=>{
               res.send(err)
          })

     }
     else{
          Post.findOneAndDelete({'_id':req.params.id,uid:user})
          .then(async (data)=>{
               console.log(data);
               if(data===null)
               {
                    res.send('Unauth')
               }
               else{
                    const deleteimage=await cloudinary.uploader.destroy(req.params.pid,options={});
     
                    console.log('Post Deleted')
                    res.send({
                         'status':'Post Deleted'
                    })
               }
              
               
     
          })
          .catch(err=>{
               res.send(err)
          })
     }
     
})
module.exports=router;         


