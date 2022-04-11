import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
      <Router>
        <Navbar title="TextChanger" mode={mode} toggle={darkenable} switch1={switchtext} />
        <div className="container my-4">

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Textform heading="Enter Text To Analyze" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;
/*
 in the last and final phase for developing the project.
*/