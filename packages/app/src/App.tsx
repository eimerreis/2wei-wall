import React from 'react';
import io from "socket.io-client";
import { Router, RouteComponentProps } from "@reach/router";
import styled, { createGlobalStyle } from "styled-components";
import { RenderComponent } from './pages/render/RenderComponent';

import "./fonts.css";

const App = () => {
  return (
    <Router>
      <RenderComponent path="/render" default />
      <Remote path="/remote" />
    </Router>
  );
}

const socket = io.connect("http://localhost:3001");

const Remote: React.FC<RouteComponentProps> = (props) => {
  const changeSlide = (slide: string) => socket.emit("change-slide", { slide });

  return (
    <div>
      <button onClick={() => changeSlide("welcome")}>Tollhaus</button>
      <button onClick={() => changeSlide("players")}>Spieler</button>
      <button onClick={() => changeSlide("sponsors")}>Sponsoren</button>
    </div>

  )
}

export default App;
