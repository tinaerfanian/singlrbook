import './App.css';
import React from 'react';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import MainComponent from './components/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
 
  return (
    <div className="App">
      {/* Navbar */}
      <MyNav />

      <MainComponent />

      {/* Footer */}
      <MyFooter />
    </div>
  );
}

export default App;
  