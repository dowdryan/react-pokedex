import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './Pokedex/App';
import Blackjack from './Blackjack/App';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/pokedex" element={<App/>} />
        <Route path="/blackjack" element={<Blackjack/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;