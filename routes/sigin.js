const router=require('express').Router()
const jwt=require('jsonwebtoken')
const mongo=require('mongoose')
const conn=mongo.createConnection(process.env.mongo_conn,{ useNewUrlParser: true,useUnifiedTopology: true})
// require('../models/Usersigindata')
// const User=conn.model('user')
router.post('/',(req,res)=>{
     const data=req.body
     
    require('../models/Usersigindata')
    const User=conn.model('user')
    
     new User(data)
     .save()
     .then(()=>{
          console.log('User Created')
          jwt.sign({"Username":data.Username,"Password":data.Password},process.env.jwt_code,(err,tk)=>{
               if(err) throw res.send(err)
               res.send({
                    "Status":"success",
                   "token":tk
               })
               
          })
        
     })
     .catch(Err=>{
          console.log(Err)
          res.send(Err)
     })
     
})
module.exports=router;