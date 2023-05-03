const express=require('express')
const addPost=require('../controllers/post.js')
const router=express.Router();

router.get('/test',(req,res)=>
{
    res.json('Test successfull (0)_(0)')
})


router.get('/add',addPost);

module.exports=router;