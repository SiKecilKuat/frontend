import React from 'react';
import logo from './logo.svg';
import './App.css';
import Create from './pages/Create';
import Home from './pages/Home';
import Log from './pages/Log';
import Register from './pages/Register';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import Children from './pages/AllChild';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'element={<Home/>}></Route>
          <Route path='/create'element={<Create/>}></Route>
          <Route path='/detail'element={<Detail/>}></Route>
          <Route path='/log'element={<Log/>}></Route>
          <Route path='/register'element={<Register/>}></Route>
          <Route path='/children'element={<Children/>}></Route>
          <Route path='*'element={<NotFound/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
