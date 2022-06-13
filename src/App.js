
import React from 'react';
import {  BrowserRouter , Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ProjectPage from './pages/ProjectPage';
import Navigation from './components/Navigation'
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
         <BrowserRouter>
      
         <Navigation/>
      <Routes>
            <Route path="/" element={<HomePage/>}> </Route>
            <Route path="/Contact" element={<ContactPage/>}> </Route>
            <Route path="/Projects" element={<ProjectPage/>}> </Route>
      </Routes>
         <Footer/>
      
      
      </BrowserRouter>

    </div>
  );
}

export default App;
