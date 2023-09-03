const express=require('express')
const {getPost,getPosts,addPost,deletePost,updatePost}=require('../controllers/post.js')
const router=express.Router();

router.get("/",getPosts)
router.get("/:id",getPost)
router.post("/",addPost)
router.delete("/:id",deletePost)
router.post("/:id",updatePost)

router.get('/add',addPost);

module.exports=router;