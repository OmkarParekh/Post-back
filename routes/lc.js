const router=require('express').Router()
const mongo=require('mongoose')
const conn=mongo.createConnection(process.env.mongo_conn,{ useNewUrlParser: true,useUnifiedTopology: true})
require('../models/post')
const Post=conn.model('post')



router.post('/like/:id/:Name',(req,res)=>{
    // Name of the person who liked
    const likedby={
        Likedbyname:req.params.Name
    }
    // submit to mongodb
    Post.updateOne({'_id':req.params.id},{$push:{'Likedby':likedby}})
    .then(()=>{
      console.log('like done')
        // find the id 
        Post.find({'_id':req.params.id})
        .then(res=>{
        // find Likedby length
        console.log(res[0].Likedby)
        const len=res[0].Likedby.length
        console.log(len)
        // Submit the Length to mongodb
        Post.updateOne({'_id':req.params.id},{$set:{'Likes':res[0].Likedby.length}})
        .catch(err=>{
            console.log(err)
        }) 
    })
    })
    
  
})
router.post('/comments/:id/:Name/:Comment',(req,res)=>{
     const data={
          Name:req.params.Name,
          Comment:req.params.Comment
         
     }
    Post.updateOne({'_id':req.params.id},{$push:{'Comments':data}})
    .then(()=>{
        res.send(data)
    })
})
module.exports=router;