import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import HeaderImage from './components/HeaderImage'
import Aboutme from './components/Aboutme'
import Github from './components/Github'
import Rodape from './components/Rodape'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <body>
          <HeaderImage />
          <Aboutme />
          <Github />
        </body>
        <footer>
          <Rodape />
        </footer>
      </div>
    );
  }
}

export default App;
