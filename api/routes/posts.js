const express=require('express')
const {getPost,getPosts,addPost,deletePost,updatePost}=require('../controllers/post.js')
const router=express.Router();

router.get("/",getPosts)
router.get("/:id",getPost)
router.post("/add",addPost)
router.post("/:id",deletePost)
router.put("/:id",updatePost)

router.get('/add',addPost);

module.exports=router;