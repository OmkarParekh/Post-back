const router=require('express').Router()
const jwt=require('jsonwebtoken')
const mongo=require('mongoose')


// const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
// router.post('/',(req,res)=>{
//      const data=req.body
//      console.log(data);
//      const conn=mongo.createConnection(process.env.mongo_conn,{ useNewUrlParser: true,useUnifiedTopology: true})
//      require('../models/Usersigindata')
//      const User=conn.model('user')
//      User.findOne({"Username":data.Username,"Password":data.Password})
//      .then(login=>{
//           if(login===null)
//           {
//                res.sendStatus(401).json({
//                     "Status":'UnAuthorized',
                  
                   
//                })
//           }
//           else{
//                jwt.sign({"Username":login.Username,"Password":login.Password},process.env.jwt_code,(err,tk)=>{
//                     if(err) throw res.send(err)
//                     res.send({
//                         token:tk,
//                         Name:login.Name,
//                         Username:login.Username,
//                         Status:'Success'
//                     })
//                     // console.log(tk);
                    
//                })
//           }
          
//      })
//      .catch(err=>{
//           console.log(err);
//      })
//      // console.log('Fuck off');


     
   
// })



module.exports=router;