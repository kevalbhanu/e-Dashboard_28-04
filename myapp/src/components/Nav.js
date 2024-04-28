import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Nav() {
  const auth=localStorage.getItem( 'user');
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate('/signup');
  }
  return (
    <div>
     { auth ? <ul className='nav-ul'>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/add">Add Product</Link></li>
        <li> <Link onClick={logout} to="/signup">Logout</Link></li>
      </ul> :
      <ul className='nav-ul nav-right'>
           <li><Link to="/signup">Sign up</Link></li>
           <li><Link to="/login">Login</Link></li>
      </ul>}
    </div>
  )
}
