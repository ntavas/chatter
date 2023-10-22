import React from 'react';
import profilePic from "../img/profile.jpg";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={profilePic} alt=""/>
        <div className="userChatInfo">
          <span>Kostas</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={profilePic} alt=""/>
        <div className="userChatInfo">
          <span>Kostas</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={profilePic} alt=""/>
        <div className="userChatInfo">
          <span>Kostas</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;