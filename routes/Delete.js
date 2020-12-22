const router=require('express').Router()
const fs=require('fs')
const mongo=require('mongoose')
const conn=mongo.createConnection(process.env.mongo_conn,{ useNewUrlParser: true,useUnifiedTopology: true})
require('../models/post')
const Post=mongo.model('post')
router.post('/:id',Authentication,(req,res)=>{
     Post.findOneAndDelete({'_id':req.params.id})
     .then(res=>{
          console.log('Post Deleted')
          if(res.path==='It is just written Post')
          {

          }
          else{
               fs.unlink(res.path, (err) => {
                    if (err) {
                      console.error(err)
                      return
                    }
                  
                    
                  })
          }
          res.send({
               'status':'Post Deleted'
          })
          

     })
})
module.exports=router;         


function Authentication(req,res,nxt){

     require('../models/Usersigindata')
     const User=mongo.model('user')
      
     const token=req.header('auth-token')
     if(!token) return res.sendStatus(401).send('Acess Denied')
     console.log(token)
     try{
     const verify=jwt.verify(token,process.env.jwt_code);
     const payload =verify;
     console.log(payload)
     try{
     User.findOne({Username:payload.Username,Password:payload.Password})
     nxt()
     }
     catch(err){
     res.sendStatus(401)
     }
     
     
     }
     catch(err){
     res.sendStatus(401).send(err)
     }
          
     
     }