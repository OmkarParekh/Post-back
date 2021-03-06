const Express=require('express')
const app=Express()
const mongo=require('mongoose')
const passport = require('passport');
require('dotenv').config();


// Express fileuploads
// const Fileupload=require('express-fileupload')
// app.use(Fileupload())

// fs
// Cloudinary
var cloudinary = require('cloudinary');
cloudinary.config({ 
     cloud_name: process.env.Cname, 
     api_key: process.env.CAPI_Key, 
     api_secret: process.env.CAPI_Secret 
   });


// server Cors Error
const cors=require('cors')
app.use(cors())


   app.use(passport.initialize());
   app.use(passport.session());

// Body Parser for requesting body
const bodyparser=require('body-parser')
app.use(bodyparser.json())


//mongodb connection
mongo.connect(process.env.mongo_conn,{ useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>{
     console.log('DataBase is Connected')
})
.catch(err=>{
     console.log(err)
})


// Routes
app.use('/',require('./routes/fetch'))
app.use('/Create',require('./routes/Add'))
app.use('/lc',require('./routes/lc'))
app.use('/delete',require('./routes/Delete'))
// app.use('/login',require('./routes/login'))
app.use('/oauth',require('./routes/oauth'))
app.use('/update',require('./routes/Postupdate'))
app.use('/post',require('./routes/singlepost'))



// app.get('/login/google/callback', 
//   passport.authenticate('google'),
//  (req, res) =>{
//     res.send('done');
//   });
// app.use('/signup',require('./routes/signup'))


// Port
app.listen(process.env.PORT || 7000,()=>{
     console.log('Server has started At port 5000')
})

// public Folder set static
// app.use(Express.static(__dirname+'/public'))
