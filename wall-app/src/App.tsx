import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { PlayerPage } from './components/Player';
import { RenderComponent } from './components/Render';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/components/player" component={PlayerPage} />
      <Route path="/components/table" component={TableComoponent} />
      <Route path="/render" component={RenderComponent} />
    </BrowserRouter>
  );
}

export default App;
