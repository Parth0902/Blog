const express=require('express')


const postRoutes=require('./routes/posts.js')
const authRoutes=require('./routes/auth.js')
const userRoutes=require('./routes/user.js')
const cookie=require('cookie-parser')

const cors=require('cors')
const app= express();


app.use(cookie());


// Due this function our backed can red the json objects that are sent via res.json function
app.use(express.json())

// cors enables the server for serving the cross origin requet sent by the font end
app.use(cors())

app.listen(8800,()=>
{
    console.log('server is running on post 8800');

})


// all routes are here
app.use('/api/posts',postRoutes);
app.use("/api/user",userRoutes);
app.use('/api/auth',authRoutes);



