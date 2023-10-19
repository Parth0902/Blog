import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
const Write = () => {
  const state=useLocation().state;
  const [value, setValue] = useState(state?.desc ||'');
  const [title, setTitle] = useState(state?.title||'');
  const [image, setImage] = useState(null);
  const [cat,setCat]=useState(state?.cat ||'');

  const upload= async()=>{
    try{
      const fromData= new FormData();
      fromData.append("file",image);
      const res=await axios.post('http://localhost:8800/api/upload',fromData);
      return res.data;

    }catch(err){
      console.log(err);
    }

  }
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const token= sessionStorage.getItem('token');
    let imgURL="";
    if(token){
      if(!state){
        imgURL= await upload();
      }
      const date=moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
      try {
       const response= state? await axios.put(`http://localhost:8800/api/posts/${state.id}`,{title,value,imgURL,cat,date,token})
        : await axios.post(`http://localhost:8800/api/posts/add`,{title,value,imgURL,cat,date,token});
        alert(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    else{
      alert('Token expiered Please login again');
    }
    
  }
  return (
    <div className="write">
      <div className="info">
        <input type="text" value={title} placeholder='Enter the title'onChange={e=>setTitle(e.target.value)}/>
        <ReactQuill id="editor" theme="snow" value={value} onChange={setValue} />
      </div>
      <div className="tools">
        <div className="publish">
          <h1>Publish</h1>
          <span> <b>Status</b>: Draft</span>
          <span> <b>Visibility</b>: Public</span>
          <input type="file" name="Upload" id=" img-upload" onChange={e=>setImage(e.target.files[0])} />

          <div className="tool--btns">
            <button id='btn1'>Save as Draft</button>
            <button id='btn2' onClick={handleSubmit}>Publish</button>
          </div>
        </div>
        <div className="category">
            <h1>Category</h1>
            
            <div className="item">
              <input type="radio" name='cat' checked={cat==="Gaming"} value="Gaming" id='Gaming'  onChange={e=>setCat(e.target.value)}/>
              <label htmlFor="Gaming">Art</label>
            </div>
          
            <div className="item">
              <input type="radio" name='cat' checked={cat==="Technology"} value="Technology" id='Technology'  onChange={e=>setCat(e.target.value)}/>
              <label htmlFor="Technology">Technology</label>
            </div>
           
            <div className="item">
              <input type="radio" name='cat' checked={cat==="Movies"} value="Movies" id='Movies'  onChange={e=>setCat(e.target.value)}/>
              <label htmlFor="Movies">Movies</label>
            </div>
           
            <div className="item">
              <input type="radio" name='cat' checked={cat==="Anime"} value="Anime" id='Anime' onChange={e=>setCat(e.target.value)} />
              <label htmlFor="Anime">Anime</label>
            </div>
            
            <div className="item">
              <input type="radio" name='cat' checked={cat==="Design"} value="Design" id='Design'  onChange={e=>setCat(e.target.value)}/>
              <label htmlFor="Design">Art</label>
            </div>
            
            <div className="item">
              <input type="radio" name='cat' checked={cat==="Food"} value="Food" id='Food'  onChange={e=>setCat(e.target.value)}/>
              <label htmlFor="Food">Art</label>
            </div>
           


        </div>
      </div>
    </div>
  );
};

export default Write;
