import logo from './logo.svg';
import $ from "jquery";
import './App.css';
import Header from './componentes/header';
import About from './componentes/about';
import Proyects from './componentes/proyects';
import React from 'react';

class App extends React.Component {

  render() {
    return(
      <div className="App">
      <Header/>
      <About/>
      <Proyects
      title="pagina para EnglisHub"
      title2 = "pagina para el cbtis 225"
      />
    </div>
    )
  }
}

export default App;