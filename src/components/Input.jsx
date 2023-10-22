import React from 'react';
import attach from "../img/attach.png";
import imgIcon from "../img/img.png";

const Input = () => {
  return (
    <div className="input">
        <input type="text" placeholder="Type something..."/>
        <div className="send">
            <img src={attach} alt=""/>
            <input type="file" style={{display:"none"}} id="file"/>
            <label htmlFor="file">
                <img src={imgIcon} alt=""/>
            </label>
            <button>Send</button>
        </div>
    </div>
  );
};

export default Input;