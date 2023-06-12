import React, {useState} from "react";
import{Chat} from "./components/Chat";
import{Auth} from "./components/Auth";
import {AppWrapper} from "./components/AppWrapper";
import Cookies from "universal-cookie";
import './App.css';

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(!!cookies.get("auth-token"));
  const [isInChat, setIsInChat] = useState(false);
  const [room, setRoom] = useState("");

  const handleEnterChat =() => {
    setIsInChat(true);
  };

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
  };

  const handleAuth = () => {
    setAuth(true);
  };

  if(!isAuth){
    return(
      <AppWrapper isAuth={handleAuth} setIsInChat={setIsAuth}>
        <Auth setAuth={handleAuth}/>
      </AppWrapper>
    );
  }


  return (
    <AppWrapper isAuth = {isAuth} setAuth={handleAuth} setIsInChat={setIsInChat}>
      {!isInChat ? (
        <div className="room">
          <label>Type room name:</label>
          <input onChange={handleRoomChange} />
          <button onClick={handleEnterChat}>Enter Chat</button>
        </div>
      ):(
        <Chat room={room} />
      )}
    </AppWrapper>
    
  );
}

export default App;
