const router=require('express').Router()
const jwt=require('jsonwebtoken')
const mongo=require('mongoose')
const conn=mongo.createConnection(process.env.mongo_conn,{ useNewUrlParser: true,useUnifiedTopology: true})
router.get('/',(req,res)=>{
     const data=req.body
     require('../models/Usersigindata')
     const User=conn.model('user')
     User.findOne({"Username":data.Username,"Password":data.Password})
     .then(res=>{
          jwt.sign({"Username":data.Username,"Password":data.Password},process.env.jwt_code,(err,tk)=>{
               if(err) throw res.send(err)
               res.send({
                   "token":tk,
                   "Status":'Success'
               })
               
          })
     })
     .catch(err=>{
          res.sendStatus(401).send({
               "Status":'Wrong Password'
          })
     })


     
   
})
module.exports=router;