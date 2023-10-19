      const db= require("../db.js")
      const jwt=require("jsonwebtoken");

      const getPosts=(req,res)=>
        {
            
             const q= req.query.cat ? "SELECT * FROM posts WHERE cat=?":"SELECT * FROM posts";

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
           const title=req.body.title;
           const description=req.body.value;
           const image=req.body.imgURL;
           const category=req.body.cat;
           const date=req.body.date;
           const token=req.body.token;
           
           
        //    console.log(title,description,image,category,date,token);
           if(!token){
            res.json("Not authenticated");
           }
           else{
                jwt.verify(token,"jwtkey",(err,userInfo)=>
                {
                    const values=[
                        title,
                        description,
                        image,
                        date,
                        userInfo.id,
                        category,
                    
                      
                     ]
                    if(err) return console.log(err)

                    const q="INSERT INTO posts (`title`,`desc`,`image`,`date`,`uid`,`cat`) VALUES (?)";
                    db.query(q,[values],(err,data)=>
                    {
                        if(err)console.log(err,"database error");
                        res.json('Post has been created');
                    })
                })

           }

         
        }

        const deletePost=(req,res)=>
        {
             const user= req.body.currentUser;
             const token=req.body.token;

            if(!token){
                res.json("Not authenticated");
            }
            
            jwt.verify(token,"jwtkey",(err,userInfo)=>
            {
                if(err) return console.log(err)

                const postId=req.params.id;
                const q="DELETE FROM posts WHERE `id` =? AND `uid`=?";
                db.query(q,[postId,user.id],(err,data)=>
                {
                    if(err)console.log("database error");
                    res.json('your post has been deleted!');
                })
            })          
        }


        const updatePost=(req,res)=>
        {
            const title=req.body.title;
            const description=req.body.value;
            const image=req.body.imgURL;
            const category=req.body.cat;
            const date=req.body.date;
            const token=req.body.token;
            
         
            if(!token){
             res.json("Not authenticated");
            }
            
            jwt.verify(token,"jwtkey",(err,userInfo)=>
             {
                 if(err) return console.log(err)
            
                 const postId=req.params.id;
                 const values=[
                    title,
                    description,
                    image,
                    date,
                    userInfo.id,
                    category
                   ]
                 const q="UPDATE POSTS SET `title`=? ,`desc`=? ,`image`=? ,`date`=? ,`uid`=? ,`cat`=? WHERE  `id`=? AND `uid`=?" ;
                 db.query(q,[...values,postId,userInfo.id],(err,data)=>
                
                 {
                     if(err)console.log("database error");
                     res.json('Post has been updated ');
                 })
             })
        }



module.exports={getPost,getPosts,addPost,deletePost,updatePost};