import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';
function NavBar() {
  return (
    <>
    <nav className="navBar">
        <div className="Main">
           <div className='Header'> <h1>ToDo App</h1></div>
            <ul className='ul-items'>
            <li className='li-item1'>
          <Link to="/">Home</Link>
          </li>
          <li className='li-item2'>
         <Link to="/Add" >Add List</Link>
         </li>
         </ul>
           </div>
    </nav>
    </>
  )
}

export default NavBar