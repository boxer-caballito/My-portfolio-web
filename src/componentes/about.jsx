import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../diseños/about.css";
import ImagenPersonal from "../images/IMAGEN-PERSONAL.jpg"

class About extends React.Component {
  aplicarTraduccion = () => {
    if (this.props.onTraducir) {
      this.props.onTraducir(this.props.idioma);
    }
  };

  componentDidMount() {
    AOS.init();
    AOS.refresh();
  }



  render() {
    return (
      <div className="seccion-paf">
        <br/>
        <h4 className="txt-paf" onClick={this.aplicarTraduccion}>Sobre mi:</h4>
      <div id="about-section" className="all-main">
        <div className="info-personal" data-aos="fade-right">
        <img  src={ImagenPersonal} className="image-personal" data-aos="fade-down"/>
        <h4 className="bb" onClick={this.aplicarTraduccion}>
        tecnologias
        </h4>
        <div className="images-group">
        <img src="https://www.svgrepo.com/show/452228/html-5.svg" alt="HTML" className="html-image"/>
        <img src="https://www.svgrepo.com/show/452185/css-3.svg" alt="CSS" className="html-image"/>
        <img src="https://www.svgrepo.com/show/353925/javascript.svg" alt="JAVASCRIPT" className="css-image"/>
        <br></br>
        <img src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg" alt="REACT" className="html-image"/>
        <img src="https://www.svgrepo.com/show/376337/node-js.svg" alt="NODE JS" className="html-image"/>
        <img src="https://www.svgrepo.com/show/452210/git.svg" alt="GIT" className="css-image"/>
        <img src="https://www.svgrepo.com/show/439171/github.svg" alt="GITHUB" className="css-image"/>
        </div>
        </div>
        <div className="info-text" data-aos="zoom-in-up">
        <div className="svg-group1">
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#0000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#cb5757" d="M8 0a8 8 0 100 16A8 8 0 008 0z"></path></g></svg>
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#0000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#57cb6e" d="M8 0a8 8 0 100 16A8 8 0 008 0z"></path></g></svg>
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#0000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ece74b" d="M8 0a8 8 0 100 16A8 8 0 008 0z"></path></g></svg>
                        </div>
          <h3 onClick={this.aplicarTraduccion} className="saludo">Hola <span className="red-text">:)</span></h3>
          <hr className="line"/>
          <p className="main-h4" onClick={this.aplicarTraduccion}>Soy Evan Alberto Aguilar Garcia,un apasionado estudiante de front-end web. Mi fascinación por la creación de experiencias digitales visualmente atractivas y funcionalmente sólidas me impulsa a explorar y aprender  constantemente en este emocionante campo. ¡Bienvenido a mi mundo, donde la creatividad se encuentra con la tecnología para dar vida a ideas innovadoras</p>
        </div>
      </div>
      </div>
    );
  }
}

export default About;