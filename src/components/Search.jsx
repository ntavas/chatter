import React from 'react';
import profilePic from '../img/profile.jpg';

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user."/>
        <div className="userChat">
          <img src={profilePic} alt=""/>
          <div className="userChatInfo">
            <span>Kostas</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;