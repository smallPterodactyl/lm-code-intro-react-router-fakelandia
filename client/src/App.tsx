import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { JusticeRouter } from "./components/routes/fl-justice-router"

function App() {
  return (
   
    <> 
      <BrowserRouter>
       <JusticeRouter/>
      </BrowserRouter>   
   
    </>

  );
}

export default App;
