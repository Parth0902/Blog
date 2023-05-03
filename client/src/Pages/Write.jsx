import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');

  return (
    <div className="write">
      <div className="info">
        <input type="text" placeholder='Enter the title'/>
        <ReactQuill id="editor" theme="snow" value={value} onChange={setValue} />;
      </div>
      <div className="tools">
        <div className="publish">
          <h1>Publish</h1>
          <span> <b>Status</b>: Draft</span>
          <span> <b>Visibility</b>: Public</span>
          <input type="file" name="Upload" id=" img-upload" />

          <div className="tool--btns">
            <button id='btn1'>Save as Draft</button>
            <button id='btn2'>Publish</button>
          </div>
        </div>
        <div className="category">
            <h1>Category</h1>
            
            <div className="item">
              <input type="radio" name='cat' value="Gaming" id='Gaming' />
              <label htmlFor="Gaming">Art</label>
            </div>
          
            <div className="item">
              <input type="radio" name='cat' value="Technology" id='Technology' />
              <label htmlFor="Technology">Technology</label>
            </div>
           
            <div className="item">
              <input type="radio" name='cat' value="Movies" id='Movies' />
              <label htmlFor="Movies">Movies</label>
            </div>
           
            <div className="item">
              <input type="radio" name='cat' value="Anime" id='Anime' />
              <label htmlFor="Anime">Anime</label>
            </div>
            
            <div className="item">
              <input type="radio" name='cat' value="Design" id='Design' />
              <label htmlFor="Design">Art</label>
            </div>
            
            <div className="item">
              <input type="radio" name='cat' value="Food" id='Food' />
              <label htmlFor="Food">Art</label>
            </div>
           


        </div>
      </div>
    </div>
  );
};

export default Write;
