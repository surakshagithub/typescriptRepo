// import React,{useEffect,useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Table from './Components/Table';
import Fetchdata from './Components/Fetchdata';
import NoPage from './Components/NoPage';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Random from './Components/Random';



function App() {
 
  
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <div className=" mt-4">
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="fetchdata" element={<Fetchdata />} />
          <Route path="random" element={<Random />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
