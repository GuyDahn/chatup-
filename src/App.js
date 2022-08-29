import socketIO from 'socket.io-client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { ChatPage } from "./components/ChatPage";

const socket = socketIO.connect('http://localhost:4000');
function App() {
  return (
    <div>
    <p>Welcome to CHUTUP!</p>
  </div>
  );
}

export default App;
