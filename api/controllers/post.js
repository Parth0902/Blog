      const db= require("../db.js")

      const getPosts=(req,res)=>
        {
             const q= req.query.cat
              ? "SELECT * FROM posts WHERE cat=?"
              : "SELECT * FROM posts";

             db.query(q,[req.query.cat],(err,data)=>
             {
                if(err) return res.status(500).json(err)

                return res.status(200).json(data);
             });
        }


        const getPost=(req,res)=>
        {
            res.json('Added a post')
        }


        const addPost=(req,res)=>
        {
            res.json('Added a post')
        }


        const deletePost=(req,res)=>
        {
            res.json('Added a post')
        }


        const updatePost=(req,res)=>
        {
            res.json('Added a post')
        }



module.exports={getPost,getPosts,addPost,deletePost,updatePost};