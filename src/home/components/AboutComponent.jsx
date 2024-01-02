import React from 'react';
import pdf from '../../../public/cv español.pdf';

export const AboutComponent = () => {
  return (
    <div className="about mx-3  px-3 py-3">
      <h3>Sobre mi</h3>
      <p>
        <b>Desarrollador web</b> con mas de 2 años de experiencia con
        tecnologias de .Net, Slq Server.
      </p>
      <p>
        Asimismo soy un entusiasta del ecosistema de Javascript, por lo cual
        tambien tengo conocimiento en react, me gusta expresar mi creatividad y
        la tecnologia es un excelente medio para ello, estoy en busqueda
        constante de retos, crecimiento y aprendizaje.
      </p>

      {/* <button className="btn btn-primary">Descargar CV</button> */}
      <a
        href={pdf}
        style={{ textDecoration: 'none' }}
        download="portafolio.pdf"
      >
        Descargar CV
      </a>
    </div>
  );
};
