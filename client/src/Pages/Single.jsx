import React, { useContext } from "react";
import { Link ,useLocation, useNavigate} from "react-router-dom";
import Writer from "../Images/Parth.jpg";
import { useState, useEffect } from "react";
import Menue from "../components/Menue";
import axios from "axios";
import moment from 'moment'
import {AuthContext} from '../context/authContext'

const Single = () => {
  const [post, setPost] = useState([]);
  const {currentUser}= useContext(AuthContext)         
  const cat = useLocation().search;
  const location =useLocation();
  const navigate=useNavigate();
  const postId=location.pathname.split('/')[2];
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts/${postId}`);
        console.log(res.data);
        setPost(res.data);
       
      } catch (err) {
        console.log(err);
      }
    };

    fetchAll();
  }, [postId]);

  const handleDelete=async ()=>
  {
    try{
      const token= sessionStorage.getItem('token');
      if(token){
        const res=await axios.post(`http://localhost:8800/api/posts/${postId}`,{currentUser,token});
        alert(res.data);
      }
      else {
        alert('Session expired please login again');
      }
     

    }catch(err){
      console.log(err);
    }

  }
  return (
    <div className="single">
      <div className="content">
          <img
            src={post?.image}

            
            alt=""
          />

          <div className="user">
            <img src={Writer} alt="" />

            <div className="info">
              <span>{post.username}</span>
              <p>Posted {moment(post.date).fromNow()}</p>
            </div>

              { currentUser.username=== post.username &&
              <div className="edit">
                <Link to={`/write?edit=2`} state={post}>
                  <i class="bx bx-edit"></i>
                </Link>

                <i class="bx bx-trash" onClick={handleDelete}></i>
              </div>
              }
          </div>

          <h1>
          {post.title}
          </h1>
        
          {post.desc}
      
      </div>
      <div className="menu">
        <Menue cat={post.cat}/>
      </div>
    </div>
  );
};

export default Single;
