const router=require('express').Router()
const jwt=require('jsonwebtoken')
const mongo=require('mongoose')
const conn=mongo.createConnection(process.env.mongo_conn,{ useNewUrlParser: true,useUnifiedTopology: true})
// require('../models/Usersigindata')
// const User=conn.model('user')
router.post('/',(req,res)=>{
     const data={
          Name:req.body.Name,
          Username:req.body.Username,
          Password:req.body.Password,
          Phonenumber:req.body.Phonenumber,


     }
     
    require('../models/Usersigindata')
    const User=conn.model('user')
    
     new User(data)
     .save()
     .then(()=>{
          console.log('User Created')   
          res.send('User Created')
     })
     .catch(err=>{
          if(err.keyValue){
               console.log(err.keyValue)
               res.send(`UserName ${err.keyValue.Username} is Already Register`)
          }
               else{
                    res.send(err);
                    console.log(err);
                    
               }
     })
     
})
module.exports=router;