import logo from './logo.svg';
import $ from "jquery";
import './App.css';
import Header from './componentes/header';
import About from './componentes/about';
import React from 'react';

class App extends React.Component {

  render() {
    return(
      <div className="App">
      <Header/>
      <About/>
    </div>
    )
  }
}

export default App;