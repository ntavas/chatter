import React from 'react';
import videoCallIcon from "../img/videoCall.png";
import addFriendIcon from "../img/addFriend.png";
import moreIcon from "../img/more.png";
import Input from "./Input.jsx";
import Messages from "./Messages.jsx";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Kostas</span>
        <div className="chatIcons">
          <img src={videoCallIcon} alt=""/>
          <img src={addFriendIcon} alt=""/>
          <img src={moreIcon} alt=""/>
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;