const router=require('express').Router()
const mongo=require('mongoose')
const conn=mongo.createConnection(process.env.mongo_conn,{ useNewUrlParser: true,useUnifiedTopology: true})
require('../models/post')
const Post=conn.model('post')

router.post('/likeornot/:id/:name',(req,res)=>{
  const name=req.params.name
  
  Post.findOne({_id:req.params.id})
  .then(data=>{
     data.Likedby.map((item)=>{
         if(item.Likedbyname===name){
             res.send({
                 data:`Liked`
             })
         }
    })
    res.send({
        data:'notLike'
    })
    
    
  })
})

router.post('/like/:id/:Name',async (req,res)=>{
    // Name of the person who liked
   
  
    // // submit to mongodb

        Post.updateOne({'_id':req.params.id},{$addToSet:{'Likedby':req.params.Name}})
        .then(()=>{
        console.log('like done')
        Post.updateOne({'_id':req.params.id},{$inc:{'Likes':+1}})
            .then((s)=>{
               
                if(s.nModified===0)
                {
                    res.send('Some Error Cause')
                    
                }
                else{
                    res.send('Liked')
                    console.log('inc');
                }
                
               
            })
            .catch(err=>{
                console.log(err);
                res.send(err)
            })
        })
        .catch(err=>{
            console.log(err)
        }) 
           
       
       
   
   
    
  
})
router.post('/unlike/:id/:name',(req,res)=>{
    Post.updateOne({'_id':req.params.id},{$pull:{'Likedby':req.params.name}})
    .then(()=>{
       
        Post.updateOne({'_id':req.params.id},{$inc:{'Likes':-1}})
        .then((s)=>{
            console.log(s);
            if(s.nModified===0){
                res.send('Some Error Cause')
                
            }
            else{
                res.send('Unliked and Dec')
            }
           
           
        })
        .catch(err=>{
            res.send(err)
            console.log(err);
        })
        
    })
    .catch(err=>{
        res.send(err)
        console.log(err);
    })
})
router.post('/comments/:id/:Name/:Comment',(req,res)=>{
     const data={
          Name:req.params.Name,
          Comment:req.params.Comment
         
     }
    Post.updateOne({'_id':req.params.id},{$push:{'Comments':data}})
    .then((d)=>{
        res.send('Commented on the Post')
    })
    .catch(err=>{
        res.send(err)
    })
})
router.post('/deletecomments/:id/:cid/',(req,res)=>{
    
    Post.updateOne({'_id':req.params.id},{$pull:{'Comments':{'_id':req.params.cid}}})
    .then((d)=>{
        res.send('Comment Deleted')
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
})
router.get('/getcomments/:id',(req,res)=>{
    Post.findOne({_id:req.params.id})
    .then(data=>{
        console.log(data);
        res.send({
            Comments:data.Comments
        })
    })
    .catch(err=>{
        res.send(err)
    })
})
module.exports=router;