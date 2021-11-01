import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light')
  const [switchtext, setswitchtext] = useState('Enable Dark Theme')
  const darkenable = () => {
    if (mode === 'light') {
      setMode('dark');
      setswitchtext('Enable Light Theme');
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode('light');
      setswitchtext('Enable Dark Theme');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextChanger" mode={mode} toggle={darkenable} switch1={switchtext} />
      <div className="container my-4">
        <Textform heading="Enter Text To Analyze" mode={mode} />
      </div>
    </>
  );
}
export default App;
/*
 in the last and final phase for developing the project.
*/