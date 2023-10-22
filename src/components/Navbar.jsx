import React from 'react';
import profilePic from '../img/profile.jpg';

const Navbar = () => {
  return (
    <div className="navbar">
        <span className="logo">Ntavas Chat</span>
        <div className="user">
            <img src={profilePic} alt="" className=""/>
            <span>Kostas</span>
            <button>Logout</button>
        </div>
    </div>
  );
};

export default Navbar;