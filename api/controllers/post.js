      const db= require("../db.js")
      const jwt=require("jsonwebtoken");

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
            const q="SELECT p.id,u.username ,p.title,p.desc,p.image,p.cat,p.date FROM USER u INNER JOIN POSTS p ON u.id=p.uid WHERE p.id= ?";
            
            db.query(q,[req.params.id],(err,data)=>
            {
                if(err){
                    console.log(err);
                    return res.json('database error');
                }
                return res.json(data[0]);
            })
           
        }


        const addPost=(req,res)=>
        {
            res.json('Added a post')
        }


        const deletePost=(req,res)=>
        {
            const token= req;
            console.log(token);
            if(!token){
                res.json("Not authenticated");
            }
            
            jwt.verify(token,"jwtkey",(err,userInfo)=>
            {
                if(err) return console.log(err)

                const postId=req.params.id;
                const q="DELETE FROM posts WHERE `id` =? AND `uid`=?";
                db.query(q,[postId,userInfo.id],(err,data)=>
                {
                    if(err)console.log("database error");
                    console.log('your post has been deleted!');
                })
            })
          
        }


        const updatePost=(req,res)=>
        {
            res.json('Added a post')
        }



module.exports={getPost,getPosts,addPost,deletePost,updatePost};