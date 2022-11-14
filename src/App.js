import React, { useState } from 'react';
import Employees from './pages/Employees';
import Customers from './pages/Customers';
import Projects from './pages/Projects';
import Dictionary from './pages/Dictionary';
import Definitions from './pages/Definitions';
import Header from './components/Header';
import Notfound from './components/Notfound';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
 
    return (
      <BrowserRouter>
 <Header >
 
  <Routes>
    <Route path="/" element={ <Employees/>}/>
    <Route path="/customers" element={ <Customers/>}/>
    <Route path="/Projects" element={ <Projects/>}/>
    <Route path="/Dictionary" element={ <Dictionary/>}/>
    <Route path="/Dictionary/:search" element={ <Definitions/>}/>
    <Route path="/404" element={ <Notfound/>}/>
  </Routes>
 
       
  </Header>
  </BrowserRouter>
 );
}

export default App;
