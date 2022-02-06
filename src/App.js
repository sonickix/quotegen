import React from "react";
import './App.css'
import Quotes from './components/Quotes'
import Ticker from "react-ticker"; 


function App() {
  return (
    <>
    <Ticker>
      {({ index }) => (
        <>
          <h1 style={{ paddingRight: "0.5em", color: "#EEEEEE", fontSize: "3rem"}}>
            Random Quote Generator on React!
          </h1>
        </>
      )}
    </Ticker>
    <Quotes/>
    </>
  );
}

export default App;
