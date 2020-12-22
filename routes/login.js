const router=require('express').Router()
const jwt=require('jsonwebtoken')
router.get('/:Username/:Password',(req,res)=>{
     jwt.sign({"Username":req.params.Username,"Password":req.params.Password},process.env.jwt_code,(err,tk)=>{
          if(err) throw res.send(err)
          res.send({
              "token":tk
          })
          
     })
   
})
module.exports=router;