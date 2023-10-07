import React from 'react';
import logo from './logo.svg';
import './App.css';
import Create from './pages/Create';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'element={<Home/>}></Route>
          <Route path='/create'element={<Create/>}></Route>
          <Route path='*'element={<NotFound/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
