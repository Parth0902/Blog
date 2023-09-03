import React, { useContext } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { AuthContext } from '../context/authContext'
const Login = () => {

  const[inputs,setInputs]=useState({
    username:"",
    password:"",
   
  });

  const [err,setErr]=useState(null)
  const navigate=useNavigate()
  const {login}=useContext(AuthContext);

  const handleChange=(e)=>
  {
    setInputs(prev=>({...prev,[e.target.name]: e.target.value}))
  }

  const handleSubmit= async (e)=>
  {
    e.preventDefault();    
    try{
      console.log(inputs);
      await login(inputs)
      navigate('/')
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
      <input required type="password" placeholder='password' name="password" onChange={handleChange}/>
      <button onClick={handleSubmit}>Submit</button>
      { err && <p>{err}</p>} 
      <span> Dont have an account?<Link to="/Register" className='link'> Register</Link></span>
    </form>
   </div>
  )
}

export default Login