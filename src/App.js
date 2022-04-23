import React, { useState } from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import "./App.css"
import Home from "./pages/Home/Home";
import Main from "./pages/Content/Main";

export default function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/main/" element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
    
    </>
  );
}
