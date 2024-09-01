import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Introduction from './routes/introduction';
import Porfolio from './routes/Porfolio'; // Assuming this is your main component for the portfolio

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Porfolio/>} />
        <Route path="/information" element={<Introduction />} />
      </Routes>
    </Router>
  );
}

export default App;