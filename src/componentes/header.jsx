import React from "react";
import "../diseños/header.css";
import About from "./about";
import Proyects from "./proyects";
import { Link } from 'react-scroll';

class Header extends React.Component {

    scrollToAbout = () => {
        const aboutSection = document.querySelector('.txt-paf');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      };

      scrollToProyects = () => {
        const aboutSection = document.querySelector('.txt-proyects');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      };

      scrollToContact = () => {
        const aboutSection = document.querySelector('.title-contact');
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
        let fondoProyectos = document.querySelectorAll(".all-content");
        let text2 = document.querySelectorAll(".text-2");
        let contactTitle = document.querySelectorAll(".title-contact");
        let email = document.querySelectorAll(".gmail");
        let github = document.querySelectorAll(".github");
    
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

        fondoProyectos.forEach((elemento) => {
            elemento.style.backgroundColor = "#e9d5a1";
        });

        text2.forEach((elemento) => {
            elemento.style.color = "black";
        });

        contactTitle.forEach((elemento) => {
            elemento.style.color = "black";
        })

        
        email.forEach((elemento) => {
            elemento.style.color = "black";
        })

        github.forEach((elemento) => {
            elemento.style.color = "black";
        })

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
        let fondoProyectos = document.querySelectorAll(".all-content");
        let text2 = document.querySelectorAll(".text-2");
        let contactTitle = document.querySelectorAll(".title-contact");
        let email = document.querySelectorAll(".gmail");
        let github = document.querySelectorAll(".github");
    
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
            elemento.style.color = "#e9d5a1";
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



        fondoProyectos.forEach((elemento) => {
            elemento.style.backgroundColor = "#282828";
        });

        text2.forEach((elemento) => {
            elemento.style.color = "#e9d5a1";
        });

        contactTitle.forEach((elemento) => {
            elemento.style.color = "white";
        })

        
        email.forEach((elemento) => {
            elemento.style.color = "white";
        })

        github.forEach((elemento) => {
            elemento.style.color = "white";
        })

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
            about: "sobre mi:",
            h1Proyects: "proyectos",
            h5Text: "pagina para EnglisHub",
            pBox: "Este proyecto fue creado para un proyecto de mi escuela sobre la creacion de una aplicacion de windows form que te enseñe ingles, aunque tambien realice una pagina para este proyecto.",
            pbox2: "Este proyecto lo realice para darle un rediseño a la pagina del cbtis 225, ya que su diseño esta un poco inadecuado lo que causaba que fuera poco atractivo.",
            pbox3: "'Este proyecto fue realizado como una prueba para la construcción de una página web dedicada a enseñar conceptos clave en el hacking ético.'",
            BTN: "ver demo",
            h6title: "pagina sobre 'hacking etico'",
            title1: "pagina para el cbtis 225",
            h1contact: "Contacto"
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
            about: "about:",
            h1Proyects: "projects",
            h5Text: "page for EnglishHub",
            pBox: "This project was created for a project at my school about creating a Windows Form application that teaches you English, although I also made a page for this project.",
            pbox2: "I carried out this project to give a redesign to the cbtis 225 page, since its design is a little inadequate which caused it to be unattractive.",
            pbox3: "'This project was carried out as a test for the construction of a website dedicated to teaching key concepts in ethical hacking.'",
            BTN: "view demo",
            h6title: "page about 'ethical hacking'",
            title1: "page for Cbtis 225",
            h1contact: "Contact"
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
        //--------------------<
        var light = document.querySelector(".pLight");
        var dark = document.querySelector(".pDark");
        var saludo = document.querySelector(".saludo");
        var about = document.querySelector(".txt-paf");
        var h1Proyects = document.querySelector(".text-2");
        var h5Text =  document.querySelector(".h5-text");
        var pBox = document.querySelector(".p-box");
        var pbox2 =  document.querySelector(".pbox3");
        var pbox3 =  document.querySelector(".pbox4");
        var h6title = document.querySelector(".h6-cbtis");
        var title1 = document.querySelector(".title1");
        var h1contact = document.querySelector(".title-contact");


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
            about.innerHTML === traduccionesIdioma.about &&
            h1Proyects.innerHTML === traduccionesIdioma.h1Proyects&&
            h5Text.innerHTML === traduccionesIdioma.h5Text &&
            pBox.innerHTML === traduccionesIdioma.pBox &&
            pbox2.innerHTML === traduccionesIdioma.pbox2 &&
            pbox3.innerHTML === traduccionesIdioma.pbox3 &&
            h6title.innerHTML === traduccionesIdioma.h6title &&
            title1.innerHTML === traduccionesIdioma.title1 &&
            h1contact.innerHTML === traduccionesIdioma.h1contact
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
            about.innerHTML = traduccionesIdioma.about;
            h1Proyects.innerHTML = traduccionesIdioma.h1Proyects;
            h5Text.innerHTML = traduccionesIdioma.h5Text;
            pBox.innerHTML = traduccionesIdioma.pBox;
            pbox2.innerHTML = traduccionesIdioma.pbox2;
            pbox3.innerHTML = traduccionesIdioma.pbox3;
            h6title.innerHTML = traduccionesIdioma.h6title;
            title1.innerHTML = traduccionesIdioma.title1;
            h1contact.innerHTML = traduccionesIdioma.h1contact;
        }
    };

    render() {
        return (
            // seccion principal
            <div className="head-main">
                <div className="navBar">
                    <button className="btn1" onClick={this.scrollToProyects}>proyectos</button>
                    <button className="btn2" onClick={this.scrollToContact}>contacto</button>
                    <button className="btn3" onClick={this.scrollToAbout}>acerca de mi</button>

                </div>
                <div className="head-info">
                    <img
                        src="https://www.svgrepo.com/show/380862/coding-program-website-computer-technology.svg"
                        alt=""
                        className="code-image"
                    />
                    <h1 className="h1">Hola, soy Evan.</h1>
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