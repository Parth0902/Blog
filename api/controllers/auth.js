const db=require('../db.js');

// the bcrypt packege provides encryption  
const bcrypt=require('bcrypt');

const JWT=require('jsonwebtoken')




// floowing function is for registering the user if user is alredy existing then it will give an error msg
const register=(req,res)=>
{

    // query for checking if the user already exists
    const q= 'SELECT * FROM user WHERE email=? OR username=?'

    db.query(q,[req.body.email,req.body.username],(err,data)=>
    {
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("User already exists!");

        // Creating the user and hashing the password

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);


        // if user does not exists perviously then we will enter the new user info in our user table

        const q='INSERT INTO user (`username`,`email`,`password`) VALUES(?)'

        const VALUES=[
            req.body.username,
            req.body.email,
            hash
        ]

        db.query(q,[VALUES],(err,data)=>
        {
            if(err) return res.json(err);
            
            return res.status(200).json("User Created succuessfully!")
        })

    })
}

const login=(req,res)=>
{
   const q="SELECT * FROM user WHERE username=?";

   db.query(q,[req.body.username],(err,data)=>
   {
       //check user 
       if(err) return res.status(500).json(err)
       if(data.length === 0) return res.status(404).json('User not found!')

       // chech the passowrd
      
       
 
       const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        data[0].password,
      );

     
       if(!isPasswordCorrect) 
       return res.status(400).json('UserName or passord is incorrect')
        
       const token=JWT.sign({id:data[0].id},'jwtkey');

       const{password,...other}=data[0]

       res
       .cookie("access_token",token, 
       {httpOnly:true})
       .status(200)
       .json(other);
      

   });


};

const logout = (req, res) => {
    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true
      }).status(200).json("User has been logged out.")
  };

module.exports={register,login,logout};
