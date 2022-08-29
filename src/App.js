import './App.css';
import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:4000');

function App() {
  return (
    <div>
    <p>Welcome to CHUTUP!</p>
  </div>
  );
}

export default App;
