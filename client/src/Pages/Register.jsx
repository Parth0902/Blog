import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Register = () => {

  const[inputs,setInputs]=useState({
    username:"",
    email:"",
    password:"",
  })

  const [err,setErr]=useState(null)

  const navigate=useNavigate()
  const handleChange=e=>
  {
    setInputs(prev=>({...prev,[e.target.name]: e.target.value}))
  }



  const handleSubmit= async e=>
  {
    e.preventDefault();
    
    try{

      await axios.post("http://localhost:8800/api/auth/register",inputs)
      navigate('/Login')
      
    } catch(err)
    {
      setErr(err.response.data)
    }

  }
  return (
    <div className="auth">
    <h2>Login</h2>
    <form action="">
      <input required type="text" placeholder='Username' name="username" onChange={handleChange}/>
      <input required type="email" placeholder='Email' name="email" onChange={handleChange}/>
      <input required type="password" placeholder='password' name="password" onChange={handleChange}/>
      <button onClick={handleSubmit}>Register</button>
      {err && <p>{err}</p>}
      <span> Already have an account?<Link to="/Login" className='link'>Log in</Link></span>
    </form>
   </div>
  )
}

export default Register