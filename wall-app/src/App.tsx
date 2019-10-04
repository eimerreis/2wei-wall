import React from 'react';
import ReactDOMServer from "react-dom/server";
import { BrowserRouter, Route } from "react-router-dom";
import io from "socket.io-client";

import logo from './logo.svg';
import './App.css';
import { PlayerPage } from './components/Player';


const divStyle: React.CSSProperties = {
  fontSize: "32pt",
  fontFamily: "Helvetica",
}

const App: React.FC = () => {
  const markup = ReactDOMServer.renderToStaticMarkup(<div style={divStyle}><h1>Hello</h1></div>);
  const socket = io.connect("http://localhost:3001");


  socket.on("connect", () => {
    console.log("connected");
    socket.emit("render-component", { markup });
  console.log(markup);
  })

  

  return (
    <BrowserRouter>
      <Route path="/components/player" component={PlayerPage}></Route>
    </BrowserRouter>
  );
}

export default App;
