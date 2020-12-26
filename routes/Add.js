const router=require('express').Router()
const mongo=require('mongoose')
const jwt=require('jsonwebtoken')
mongo.connect(process.env.mongo_conn,{useNewUrlParser: true,useUnifiedTopology: true })
require('../models/post')
const Post=mongo.model('post')


router.post('/',(req,res)=>{   
     // // filename creation
     // let filename=`/uploads/${Date.now()}.jpg`
     // // Checking the post Photo 
     // try{
     //      const file=req.files.image
     //      file.mv(filename,(err,result)=>{
     //           if(err) throw err;    
     //      })    
     // }
     // // if not the change the name with this
     // catch(errr){
     //      filename='It is just written Post'
     // }



     // data for Mongodb
     const data={
          Postname:req.body.Postname,
          Description:req.body.Description,
          Username:req.body.Username,
          Date:req.body.Date,
          path:req.body.path,
          Likes:0
        
     }
     // res.send('hello')
    
    
     // Data submiting to mongo with the help of Models
     new Post(data)
     .save()
     .then((d)=>{
          res.send({
          Status:'Post is created',
          data:d
          })
          console.log(d)
          console.log('Data Uploaded')
     })
     .catch(err=>{
          console.log(err)
          res.send(err)
     })
   
    

})
const cloudinary=require('cloudinary')
const multer=require('multer')
const upload=multer({
storage:multer.diskStorage({limits: {
     fileSize: 1000000,
     },})
})
router.post('/upload',upload.single('file'),async (req,res)=>{
//   console.log('hello');
//   res.send(req.file)
  if(req.file)
     {    try{
               const data= await cloudinary.v2.uploader.upload(req.file.path)
               console.log(data);
               res.send({
                    url:data.secure_url,
                    public_id:data.public_id
               })

          }
          catch(err){
          console.log(err);
          res.send(err)
          }
       
    
  }
   
     
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