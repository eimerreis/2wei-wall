import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { PlayerPage } from './components/Player';
import { TableComponent } from './components/Table';
import { RenderComponent } from './components/Render';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/components/player" component={PlayerPage} />
      <Route path="/components/table" component={TableComponent} />
      <Route path="/render" component={RenderComponent} />
    </BrowserRouter>
  );
}

export default App;
