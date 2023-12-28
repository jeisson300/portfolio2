import React from 'react';
import linkdin from '../../assets/linkdin.svg';

export const AboutComponent = () => {
  return (
    <div className="about mx-3 px-3 py-3">
      <h3>Sobre mi</h3>
      <p>
        <b>Desarrollador web</b> con mas de 2 años de experiencia con
        tecnologias de .Net, soy una persona muy compromentida con mi trabajo,
        siempre en busca de conocimiento y crecimiento
      </p>
      <a
        href="https://www.linkedin.com/in/jose-jeisson-ceballos-leal-877026171/"
        target="_blank"
      >
        <img style={{ width: 25 }} src={linkdin} alt="linkdin" />
      </a>
    </div>
  );
};
