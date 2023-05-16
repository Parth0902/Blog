import React, { useContext } from 'react'
import Logo from '../Images/logo.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
const Navbar = () => {

  const {currentUser,logout}=useContext(AuthContext);
  return (
   <section id="nav">
    <div className="logo">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
    </div>

    <div className="links">

 
      <Link to='/?cat=Gaming'className='link'>
        <h6>Gaming</h6>
      </Link>
      
      <Link to='/?cat=Technology'className='link'>
        <h6>Technology</h6>
      </Link>
      
      <Link to='/?cat=Movies'className='link'>
        <h6>Movies</h6>
      </Link>
      
      <Link to='/?cat=Anime'className='link'>
        <h6>Anime</h6>
      </Link>
    
      <Link to='/?cat=Design'className='link'>
        <h6>Design</h6>
      </Link>
      
      <Link to='/?cat=Food'className='link'>
        <h6>Food</h6>
      </Link>
      
        
      
      <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}

      <Link to='/Write' className='write--btn'>Write</Link>
     
   

    </div>
   </section>
  )
}

export default Navbar