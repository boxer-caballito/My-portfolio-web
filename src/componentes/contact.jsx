import React from "react";
import "../diseños/contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

class Lata extends React.Component {

    location = () => {
        window.location.href = "https://github.com/boxer-caballito";
    }

    enviarCorreo = () => {
        const correoDestino = 'evan_boxer_@outlook.com';
        const asunto = 'Asunto del correo';
        const cuerpo = 'Cuerpo del correo';
        const enlaceCorreo = `mailto:${correoDestino}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
        window.location.href = enlaceCorreo;
    }
    aplicarTraduccion = () => {
        if (this.props.onTraducir) {
          this.props.onTraducir(this.props.idioma);
        }
      };

    

    render() {
        return(
            <div className="all">
                <h1 className="title-contact" onClick={this.aplicarTraduccion}>Contacto</h1>
                <div className="data">
                    <div>
                    <svg fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" className="email"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fill-rule="evenodd"></path> </g></svg>
                        <p className="gmail" data-aos="fade-right">evan_boxer_@outlook.com</p>
                        <button className="BUTTONS"  onClick={this.enviarCorreo} data-aos="fade-right">Email</button>
                    </div>
                    <div>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000" className="GITHUB"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <rect width="24" height="24" fill="none"></rect> <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path> </g></svg>
                        <p className="github"  data-aos="fade-right">GITHUB</p>
                        <button className="BUTTONS" onClick={this.location}  data-aos="fade-right">github</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Lata;


