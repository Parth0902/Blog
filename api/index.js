const express=require('express')

const postRoutes=require('./routes/posts.js')
const authRoutes=require('./routes/auth.js')
const userRoutes=require('./routes/user.js')
const multer =require('multer');
const cookie=require('cookie-parser')
const cors=require('cors')
const app= express();
app.use(cookie());
// Due this function our backed can red the json objects that are sent via res.json function
app.use(express.json())
// cors enables the server for serving the cross origin requet sent by the font end
app.use(cors())


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb) {
       cb(null, +Date.now()+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
    app.post('/api/upload', upload.single('file'), function (req, res) {
    const file=req.file;
    res.json(file.filename)
    
  })
  


// all routes are here
app.use('/api/posts',postRoutes);
app.use("/api/user",userRoutes);
app.use('/api/auth',authRoutes);
app.listen(8800,()=>
{
    console.log('server is running on post 8800');

})
