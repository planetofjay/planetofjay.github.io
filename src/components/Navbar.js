import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder';

export default function Navbar() {
  const [expandNavbar, setExpendNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpendNavbar(false);
  }, [location]);

  return (
    <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
      <div className='toggleButton'>
        <button 
          onClick={() => {
            setExpendNavbar((prev) => !prev);
          }}
        > 
          <ReorderIcon /> 
        </button>
      </div>
      <div className='links'>
        <Link to='/'> Home </Link>
        <Link to='/projects'> Projects </Link>
        <Link to='/experience'> Experience </Link>
      </div>
    </div>
  );
}