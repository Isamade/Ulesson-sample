import React from 'react';
import ulessonLogo from './ulesson-logo.svg';
import userIcon from './user-icon.svg';

const Navbar = () => {
  return (
    <nav className='my-navbar flex-justify'>
      <span><img src={ulessonLogo} alt='ulesson logo'/></span>
      <span className="flex-justify"><img src={userIcon} alt='user icon'/><p className='my-navbar-username'>Hassan</p></span>
    </nav>
  )
}

export default Navbar;
