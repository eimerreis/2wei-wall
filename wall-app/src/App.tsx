import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { PlayerPage } from './components/Player';
import { TableComponent } from './components/Table';
import { RenderComponent } from './components/Render';
import { RemoteControl } from './components/RemoteControl';
import { PastMatchesPage } from './components/PastMatches';
import { NextHomeGamePage } from './components/NextHomeGame';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/components/player" component={PlayerPage} />
      <Route path="/components/table" component={TableComponent} />
      <Route path="/components/past-matches" component={PastMatchesPage} />
      <Route path="/components/next-home-game" component={NextHomeGamePage} />
      <Route path="/render" component={RenderComponent} />
      <Route path="/remote-control" component={RemoteControl} />
    </BrowserRouter>
  );
}

export default App;
