import React from 'react';
import reacticon from '../../assets/react.svg';
import csharpicon from '../../assets/csharp.svg';
import jsicon from '../../assets/js.svg';
import sqlicon from '../../assets/sql_server.svg';
import { motion } from 'framer-motion';

export const SkillsComponent = () => {
  return (
    <div className="skill container">
      <h2>Habilidades</h2>
      <section>
        <motion.div
          id="horiz"
          initial={{ rotate: 0 }} // Ángulo de rotación inicial
          animate={{ rotate: 360 }} // Ángulo de rotación final
          transition={{ duration: 100, repeat: Infinity, ease: 'linear' }} // Duración de la animación y repetición infinita
        >
          <motion.img
            whileHover={{ scale: 1.2 }} // Escala al pasar el mouse sobre la imagen
            style={{ width: 50 }}
            src={reacticon}
            alt="react"
          />
          <motion.img
            whileHover={{ scale: 1.2 }} // Escala al pasar el mouse sobre la imagen
            style={{ width: 50 }}
            src={csharpicon}
            alt="c#"
          />
        </motion.div>
        <motion.div
          id="vert"
          initial={{ rotate: 0 }} // Ángulo de rotación inicial
          animate={{ rotate: 360 }} // Ángulo de rotación final
          transition={{ duration: 100, repeat: Infinity, ease: 'linear' }} // Duración de la animación y repetición infinita
        >
          <motion.img
            whileHover={{ scale: 1.2 }} // Escala al pasar el mouse sobre la imagen
            style={{ width: 50 }}
            src={jsicon}
            alt="js"
          />
          <motion.img
            whileHover={{ scale: 1.2 }} // Escala al pasar el mouse sobre la imagen
            style={{ width: 50 }}
            src={sqlicon}
            alt="sql"
          />
        </motion.div>
      </section>
    </div>
  );
};
