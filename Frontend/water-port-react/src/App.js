import './App.css';
import React from 'react'
import {
  BrowserRouter, 
  Routes,
  Route
} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import Guide from './pages/Guide';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='measuring-guide' element={<Guide/>} />
          <Route path='dashboard' element={<Dashboard />} />
        
        </Routes>
      </BrowserRouter>
      
  
    </div>
  );
}

export default App;
