import React from "react";
import "../diseños/header.css";
import About from "./about";
import { Link } from 'react-scroll';

class Header extends React.Component {

    scrollToAbout = () => {
        const aboutSection = document.querySelector('.txt-paf');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      };
    

    //cambiar colores

    darkFondo = () => {
        let Fondos = document.querySelectorAll(".head-main");
        let h1 = document.querySelectorAll(".h1");
        let paf = document.querySelectorAll(".paf");
        let btn1 = document.querySelectorAll(".btn1");
        let btn2 = document.querySelectorAll(".btn2");
        let btn3 = document.querySelectorAll(".btn3");
        let red = document.querySelectorAll(".name");
        let dark = document.querySelectorAll(".dark");
        let light = document.querySelectorAll(".ligth");
        const body = document.querySelector('body');
        let about = document.querySelectorAll('.txt-paf');
        let bb = document.querySelectorAll('.bb');
        let saludo = document.querySelectorAll('.saludo');
        let info = document.querySelectorAll(".main-h4");
        let infoTexto = document.querySelectorAll(".info-text");
    
        Fondos.forEach((elemento) => {
            elemento.style.backgroundColor = "#e9d5a1";
        });

        h1.forEach((elemento) => {
            elemento.style.color = "black";
        });

        paf.forEach((elemento) => {
            elemento.style.color = "black";
        });

        red.forEach((elemento) => {
            elemento.style.color = "brown";
        });

        btn1.forEach((elemento) => {
            elemento.style.backgroundColor = "#e9d5a1";
            elemento.style.color = "black";
        });

        btn1.forEach(elemento => {
            elemento.addEventListener("mouseover", () => {
                elemento.style.border = "border: 1px #000 solid";
                elemento.style.backgroundColor = "#000";
                elemento.style.color = "white"
                elemento.style.borderRadius = "20px"

            });
      
            elemento.addEventListener("mouseout", () => {
              elemento.style.color = "black"; 
              elemento.style.backgroundColor = "#e9d5a1";
              elemento.style.borderRadius = "0px"

            });
          });

          btn2.forEach((elemento) => {
            elemento.style.backgroundColor = "#e9d5a1";
            elemento.style.color = "black";
        });

        btn2.forEach(elemento => {
            elemento.addEventListener("mouseover", () => {
                elemento.style.border = "border: 1px #000 solid";
                elemento.style.backgroundColor = "#000";
                elemento.style.color = "white"
                elemento.style.borderRadius = "20px"
                // Cambia a color rojo al hacer hover con JavaScript
            });
      
            elemento.addEventListener("mouseout", () => {
              elemento.style.color = "black"; 
              elemento.style.backgroundColor = "#e9d5a1";
              elemento.style.borderRadius = "0px"
              // Restaura el color original al salir del hover
            });
          });


          btn3.forEach((elemento) => {
            elemento.style.backgroundColor = "#e9d5a1";
            elemento.style.color = "black";
        });

        btn3.forEach(elemento => {
            elemento.addEventListener("mouseover", () => {
                elemento.style.border = "border: 1px #000 solid";
                elemento.style.backgroundColor = "#000";
                elemento.style.color = "white"
                elemento.style.borderRadius = "20px"
                // Cambia a color rojo al hacer hover con JavaScript
            });
      
            elemento.addEventListener("mouseout", () => {
              elemento.style.color = "black"; 
              elemento.style.backgroundColor = "#e9d5a1";
              elemento.style.borderRadius = "0px"
              // Restaura el color original al salir del hover
            });
          });

        light.forEach((elemento) => {
            elemento.style.border = "2px solid red";
        });

        
        dark.forEach((elemento) => {
            elemento.style.border = "none";
        });

        body.style.backgroundColor = 'white'; 

        about.forEach((elemento) => {
            elemento.style.color = "brown";
        });

        
        bb.forEach((elemento) => {
            elemento.style.color = "black";
        });

        saludo.forEach((elemento) => {
            elemento.style.color = "black";
        });

        info.forEach((elemento) => {
            elemento.style.color = "black";
        });

        
        infoTexto.forEach((elemento) => {
            elemento.style.backgroundColor = "white";
        });

    }

    lightFondo = () => {
        let Fondos = document.querySelectorAll(".head-main");
        let h1 = document.querySelectorAll(".h1");
        let paf = document.querySelectorAll(".paf");
        let btn1 = document.querySelectorAll(".btn1");
        let btn2 = document.querySelectorAll(".btn2");
        let btn3 = document.querySelectorAll(".btn3");
        let red = document.querySelectorAll(".name");
        let dark = document.querySelectorAll(".dark");
        let light = document.querySelectorAll(".ligth");
        const body = document.querySelector('body');
        let about = document.querySelectorAll('.txt-paf');
        let bb = document.querySelectorAll('.bb');
        let saludo = document.querySelectorAll(".saludo");
        let info = document.querySelectorAll(".main-h4");
        let infoTexto = document.querySelectorAll(".info-text");
    
        Fondos.forEach((elemento) => {
            elemento.style.backgroundColor = "#282828";
        });

        h1.forEach((elemento) => {
            elemento.style.color = "white";
        });

        paf.forEach((elemento) => {
            elemento.style.color = "white";
        });

        red.forEach((elemento) => {
            elemento.style.color = "red";
        });

        btn1.forEach((elemento) => {
            elemento.style.backgroundColor = "#000";
            elemento.style.color = "white";
            elemento.style.borderRadius = "0px 0px 20px 20px"
        });

        btn1.forEach(elemento => {
            elemento.addEventListener("mouseover", () => {
                elemento.style.border = "border: 1px #000 solid";
                elemento.style.backgroundColor = "#000";
                elemento.style.color = "white"
                elemento.style.borderRadius = "20px"
                // Cambia a color rojo al hacer hover con JavaScript
            });
      
            elemento.addEventListener("mouseout", () => {
              elemento.style.color = "white"; 
              elemento.style.backgroundColor = "#000";
              elemento.style.borderRadius = "0px 0px 20px 20px"
              // Restaura el color original al salir del hover
            });
          });

        btn2.forEach((elemento) => {
            elemento.style.backgroundColor = "#000";
            elemento.style.color = "white";
            elemento.style.borderRadius = "0px 0px 20px 20px"
        });

        btn2.forEach(elemento => {
            elemento.addEventListener("mouseover", () => {
                elemento.style.border = "border: 1px #000 solid";
                elemento.style.backgroundColor = "#000";
                elemento.style.color = "white"
                elemento.style.borderRadius = "20px"
                // Cambia a color rojo al hacer hover con JavaScript
            });
      
            elemento.addEventListener("mouseout", () => {
              elemento.style.color = "white"; 
              elemento.style.backgroundColor = "#000";
              elemento.style.borderRadius = "0px 0px 20px 20px"
              // Restaura el color original al salir del hover
            });
          });

        btn3.forEach((elemento) => {
            elemento.style.backgroundColor = "#000";
            elemento.style.color = "white";
            elemento.style.borderRadius = "0px 0px 20px 20px"
        });

        dark.forEach((elemento) => {
            elemento.style.border = "2px solid red";
        });

        btn3.forEach(elemento => {
            elemento.addEventListener("mouseover", () => {
                elemento.style.border = "border: 1px #000 solid";
                elemento.style.backgroundColor = "#000";
                elemento.style.color = "white"
                elemento.style.borderRadius = "20px"
                // Cambia a color rojo al hacer hover con JavaScript
            });
      
            elemento.addEventListener("mouseout", () => {
              elemento.style.color = "white"; 
              elemento.style.backgroundColor = "#000";
              elemento.style.borderRadius = "0px 0px 20px 20px"
              // Restaura el color original al salir del hover
            });
          });

        
        light.forEach((elemento) => {
            elemento.style.border = "none";
        });

        body.style.backgroundColor = "#bdbdbd";

        about.forEach((elemento) => {
            elemento.style.color = "white";
        });

                
        bb.forEach((elemento) => {
            elemento.style.color = "white";
        });

        saludo.forEach((elemento) => {
            elemento.style.color = "white";
        });

        info.forEach((elemento) => {
            elemento.style.color = "white";
        });

        infoTexto.forEach((elemento) => {
            elemento.style.backgroundColor = "#4c4a4a";
        });

    }

    //funcion de calback para la opacidad de la bandera de MEXICO
    opacidadMexico = () => {
        let banderaUSA = document.querySelectorAll(".flags1");
        let banderaMexico = document.querySelectorAll(".flags");
    
        // Itera sobre cada bandera y aplica la opacidad
        banderaUSA.forEach(bandera => {
            bandera.style.opacity = "0.2";
        });

        banderaMexico.forEach(bandera => {
            bandera.style.opacity = "1";
        });
    }

        //funcion de calback para la opacidad de la bandera de USA
    opacidadUSA = () => {
        let banderaMexico = document.querySelectorAll(".flags");
        let banderaUSA = document.querySelectorAll(".flags1");
    
        // Itera sobre cada bandera y aplica la opacidad
        banderaMexico.forEach(bandera => {
            bandera.style.opacity = "0.2";
        });

        banderaUSA.forEach(bandera => {
            bandera.style.opacity = "1";
        });
    }
    
    traducciones = {
        español: {
            text1: "Soy estudiante de programacion web orientado al front-end",
            btn1: "proyectos",
            btn2: "contacto",
            btn3: "acerca de mi",
            h1: "Hola, soy Evan.",
            h4: "Seleccionar lenguaje",
            parrafoElement: "tecnologias",
            infoPersonal: "Soy Evan Alberto Aguilar Garcia,un apasionado estudiante de front-end web. Mi fascinación por la creación de experiencias digitales visualmente atractivas y funcionalmente sólidas me impulsa a explorar y aprender constantemente en este emocionante campo. ¡Bienvenido a mi mundo, donde la creatividad se encuentra con la tecnología para dar vida a ideas innovadoras",
            light: "claro",
            dark: "oscuro",
            saludo:"Hola :)",
            about: "sobre mi:"
        },
        ingles: {
            text1: "I am a student of front-end oriented web programming",
            btn1: "projects",
            btn2: "contact",
            btn3: "about",
            h1: "Hi, I'm Evan.",
            h4: "Select the language",
            parrafoElement: "tecnologies",
            infoPersonal: "I am Evan Alberto Aguilar García, a passionate student of web front-end. My fascination with creating visually engaging and functionally sound digital experiences drives me to explore and learn. constantly in this exciting field.Welcome to my world, where creativity meets technology to bring innovative ideas to life",
            light: "light",
            dark: "dark",
            saludo:"Hi :)",
            about: "about:"
        },
    };

    traducir = (idioma) => {
        var text1 = document.querySelector(".paf");
        var btn1 = document.querySelector(".btn1");
        var btn2 = document.querySelector(".btn2");
        var btn3 = document.querySelector(".btn3");
        var h1 = document.querySelector(".h1");
        var h4 = document.querySelector(".h4");
        var parrafoElement = document.querySelector(".bb");
        var infoPersonal = document.querySelector(".main-h4");
        var light = document.querySelector(".pLight");
        var dark = document.querySelector(".pDark");
        var saludo = document.querySelector(".saludo");
        var about = document.querySelector(".txt-paf");


        const traduccionesIdioma = this.traducciones[idioma];

        if (
            text1.innerHTML === traduccionesIdioma.text1 &&
            btn1.innerHTML === traduccionesIdioma.btn1 &&
            btn2.innerHTML === traduccionesIdioma.btn2 &&
            btn3.innerHTML === traduccionesIdioma.btn3 &&
            h1.innerHTML === traduccionesIdioma.h1 &&
            h4.innerHTML === traduccionesIdioma.h4 &&
            parrafoElement.innerHTML === traduccionesIdioma.parrafoElement &&
            infoPersonal.innerHTML === traduccionesIdioma.infoPersonal &&
            light.innerHTML === traduccionesIdioma.light &&
            dark.innerHTML === traduccionesIdioma.dark &&
            saludo.innerHTML === traduccionesIdioma.saludo &&
            about.innerHTML === traduccionesIdioma.about
        ) {
            alert("El texto ya está traducido al " + idioma);
        } else {
            text1.innerHTML = traduccionesIdioma.text1;
            btn1.innerHTML = traduccionesIdioma.btn1;
            btn2.innerHTML = traduccionesIdioma.btn2;
            btn3.innerHTML = traduccionesIdioma.btn3;
            h1.innerHTML = traduccionesIdioma.h1;
            h4.innerHTML = traduccionesIdioma.h4;
            parrafoElement.innerHTML = traduccionesIdioma.parrafoElement;
            infoPersonal.innerHTML = traduccionesIdioma.infoPersonal;
            light.innerHTML = traduccionesIdioma.light;
            dark.innerHTML = traduccionesIdioma.dark;
            saludo.innerHTML = traduccionesIdioma.saludo;
            about.innerHTML = traduccionesIdioma.about
        }
    };

    render() {
        return (
            // seccion principal
            <div className="head-main">
                <div className="navBar">
                    <button className="btn1">proyectos</button>
                    <button className="btn2">contacto</button>
                    <button className="btn3" onClick={this.scrollToAbout}>acerca de mi</button>

                </div>
                <div className="head-info">
                    <img
                        src="https://www.svgrepo.com/show/380862/coding-program-website-computer-technology.svg"
                        alt=""
                        className="code-image"
                    />
                    <h1 className="h1">Hola, <span className="name">soy Evan</span>.</h1>
                    <br />
                    <p className="paf">Soy estudiante de programacion web orientado al front-end</p>
                    <div className="light-night">
                        <button className="ligth" onClick={this.darkFondo}><p className="pLight">claro</p> <br/>
                        <img src="https://www.svgrepo.com/show/503805/sun.svg" className="sun" alt="sun"/>
                        </button>
                        <button className="dark" onClick={this.lightFondo}><p className="pDark">oscuro</p> <br/>
                        <img src="https://www.svgrepo.com/show/440502/moon-full-moon.svg" alt="moon" className="moon" />
                        </button>
                    </div>
                    <div className="main-content-flag">
                    <div className="content-flag">
                    <h4 className="h4">Seleccionar lenguaje</h4>
                    <img
                                src="https://www.svgrepo.com/show/508593/flag-mx.svg"
                                className="flags"
                                onClick={() => {
                                    this.traducir("español");
                                    this.opacidadMexico();
                                }}
                            />
                        <img
                            src="https://www.svgrepo.com/show/508668/flag-us.svg"
                            className="flags1"
                            onClick={() => {
                                this.traducir("ingles")
                                this.opacidadUSA();
                        }}
                        />
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;