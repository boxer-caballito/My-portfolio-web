import { react } from "@babel/types";
import React from "react";
import "../diseños/proyects.css";
import EnglisHub from "../images/EnglisHub.PNG";
import AOS from "aos";
import "aos/dist/aos.css";

class Proyects extends React.Component {

    location = () => {
        window.location.href = "https://github.com/boxer-caballito/EnglisHub-ES";
    } 

    location1 = () => {
        window.location.href = "https://boxer-caballito.github.io/EnglisHub-ES/principal.html";
    } 

    location2 = () => {
        window.location.href = "https://github.com/boxer-caballito/cbtis225-Redesigned";
    } 

    location3 = () => {
        window.location.href = "https://boxer-caballito.github.io/cbtis225-Redesigned/";
    } 

        aplicarTraduccion = () => {
          if (this.props.onTraducir) {
            this.props.onTraducir(this.props.idioma);
          }
        };

        location4 = () => {
            window.location.href = "https://qn2yp7.mimo.run/index.html";
        } 
      

    render() {
        return (
            <div className="all-content">
                <div className="txt-proyects">
                <h2 className="text-2" onClick={this.aplicarTraduccion}>proyectos</h2>
                </div>
                <div className="proyects-content">
                    <div className="background" data-aos = "fade-left">
                        <div className="proyect-1">
                            <div className="svg-group">
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#0000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#cb5757" d="M8 0a8 8 0 100 16A8 8 0 008 0z"></path></g></svg>
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#0000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#57cb6e" d="M8 0a8 8 0 100 16A8 8 0 008 0z"></path></g></svg>
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#0000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ece74b" d="M8 0a8 8 0 100 16A8 8 0 008 0z"></path></g></svg>
                        </div>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 15H19M14 15H19M17 13.5V15M4.85714 8H9.14286M4 11L5.53848 5.61531C5.97492 4.08777 6.19315 3.324 6.53044 3.13222C6.82159 2.96667 7.17841 2.96667 7.46956 3.13222C7.80685 3.324 8.02508 4.08777 8.46152 5.61531L10 11M14 20.9776C16.8033 20.725 19 18.369 19 15.5V15M20 20.9776C18.0763 20.8043 16.4382 19.6404 15.5996 18M14 7C14.9319 7 15.3978 7 15.7654 7.15225C16.2554 7.35523 16.6448 7.74458 16.8478 8.23464C17 8.60218 17 9.06812 17 10M7 15C7 15.9319 7 16.3978 7.15224 16.7654C7.35523 17.2554 7.74458 17.6448 8.23463 17.8478C8.60218 18 9.06812 18 10 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <hr/>
                            <h5 className="h5-text" onClick={this.aplicarTraduccion}>{this.props.title}</h5>
                            <br/>
                            <p className="p-box" onClick={this.aplicarTraduccion}>Este proyecto fue creado para un proyecto de mi escuela sobre la creacion de una aplicacion de windows form que te enseñe ingles, aunque tambien realice una pagina para este proyecto.</p>
                            <hr className="line-top"/>
                            <button className="btn-demo" onClick={this.location1}>demo</button>
                            <button className="btn-github" onClick={this.location}>GITHUB</button>
                        </div>
                    </div>
                    <div className="background" data-aos = "fade-left">
                        <div className="proyect-1">
                        <div className="svg-group">
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#0000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#cb5757" d="M8 0a8 8 0 100 16A8 8 0 008 0z"></path></g></svg>
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#0000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#57cb6e" d="M8 0a8 8 0 100 16A8 8 0 008 0z"></path></g></svg>
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#0000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ece74b" d="M8 0a8 8 0 100 16A8 8 0 008 0z"></path></g></svg>
                        </div>
                        <svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" className="svg2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M32 388.8h960V992H32z" fill="#FAD97F"></path><path d="M496 121.6l-100.8-60.8L496 0z" fill="#F2385A"></path><path d="M156.8 584h52.8v48H156.8zM156.8 500.8h52.8V552H156.8zM241.6 584h52.8v48h-52.8zM240 500.8h52.8V552H240z" fill="#FFFFFF"></path><path d="M124.8 468.8V664h201.6v-195.2H124.8z m168 83.2H240v-51.2h52.8V552z m-83.2 80H156.8v-48h52.8v48z m0-80H156.8v-51.2h52.8V552z m84.8 80h-52.8v-48h52.8v48z" fill=""></path><path d="M443.2 500.8H496V552h-52.8zM443.2 584H496v48h-52.8zM528 500.8h52.8V552H528zM528 584h52.8v48H528z" fill="#FFFFFF"></path><path d="M411.2 468.8V664h201.6v-195.2H411.2zM496 584v48h-52.8v-48H496z m-52.8-32v-51.2H496V552h-52.8z m84.8 80v-48h52.8v48H528z m52.8-80H528v-51.2h52.8V552z" fill=""></path><path d="M731.2 500.8H784V552h-52.8zM814.4 500.8h52.8V552h-52.8zM814.4 584h52.8v48h-52.8zM729.6 584h52.8v48h-52.8z" fill="#FFFFFF"></path><path d="M699.2 468.8V664h201.6v-195.2H699.2z m83.2 163.2h-52.8v-48h52.8v48z m1.6-80h-52.8v-51.2H784V552z m83.2 80h-52.8v-48h52.8v48z m0-80h-52.8v-51.2h52.8V552z" fill=""></path><path d="M427.2 808h169.6v184h-169.6z" fill="#FFFFFF"></path><path d="M528 356.8V0h-32v356.8H0V1024h1024V356.8H528zM596.8 992h-169.6v-184h169.6v184z m395.2 0H628.8V776H395.2v216H32V388.8h960V992z" fill=""></path></g></svg>
                            <hr/>
                            <h5 className="title1" onClick={this.aplicarTraduccion}>pagina para el cbtis 225</h5>
                            <br/>
                            <p className="pbox3" onClick={this.aplicarTraduccion}>Este proyecto lo realice para darle un rediseño a la pagina del cbtis 225, ya que su diseño esta un poco inadecuado lo que causaba que fuera poco atractivo.</p>
                            <hr className="line-top"/>
                            <button className="btn-demo" onClick={this.location3}>demo</button>
                            <button className="btn-github" onClick={this.location2}>GITHUB</button>
                        </div>
                    </div>
                </div>
                <div className="proyects-down">
                <div className="background" data-aos = "fade-left">
                        <div className="proyect-1">
                        <div className="svg-group">
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#0000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#cb5757" d="M8 0a8 8 0 100 16A8 8 0 008 0z"></path></g></svg>
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#0000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#57cb6e" d="M8 0a8 8 0 100 16A8 8 0 008 0z"></path></g></svg>
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#0000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ece74b" d="M8 0a8 8 0 100 16A8 8 0 008 0z"></path></g></svg>
                        </div>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M13.9868 5L12.9934 8.70743M11.8432 13L10.0132 19.8297" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                            <hr/>
                            <h5 className="h6-cbtis" onClick={this.aplicarTraduccion}>pagina sobre 'hacking etico'</h5>
                            <br/>
                            <p className="pbox4" onClick={this.aplicarTraduccion}>'Este proyecto fue realizado como una prueba para la construcción de una página web dedicada a enseñar conceptos clave en el hacking ético.'</p>
                            <hr className="line-top"/>
                            <button className="btn-demo" onClick={this.location4}>demo</button>
                        </div>
                    </div>
                </div>
                </div>
        )
    }
}

export default Proyects;