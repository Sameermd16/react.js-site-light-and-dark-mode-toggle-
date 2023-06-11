import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {

  const [darkMode, setDarkMode] = React.useState(true)

  function toggleDarkMode(){
    setDarkMode((prevMode) => {
      return !prevMode 
    })
  }
  return (
    <div>
      <Navbar 
        toggleDarkMode = {toggleDarkMode}
        darkMode = {darkMode}
      />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
