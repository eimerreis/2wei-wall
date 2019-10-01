import React from 'react';
import ReactDOMServer from "react-dom/server";
import logo from './logo.svg';
import './App.css';
import io from "socket.io-client";

const divStyle: React.CSSProperties = {
  fontSize: "32pt",
  fontFamily: "Helvetica",
}

const App: React.FC = () => {
  const markup = ReactDOMServer.renderToStaticMarkup(<div style={divStyle}><h1>Hello</h1></div>);
  const socket = io.connect("wss://echo.websocket.org");

  socket.emit("showComponent", { markup });


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
