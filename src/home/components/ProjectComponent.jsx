import { motion } from 'framer-motion';
import coinAppImage from '../../assets/coinApp.png';
import portfolioImage from '../../assets/portafolio.png';
import reacticon from '../../assets/react.svg';
import csharpicon from '../../assets/csharp.svg';
import sqlicon from '../../assets/sql_server.svg';
import nodejs from '../../assets/nodejs.svg';
import mongodb from '../../assets/mongodb.svg';
import github from '../../assets/github.svg';

export const ProjectComponent = () => {
  return (
    <div className="row mx-5">
      <h2 className="title_project">Proyectos</h2>
      <div className="col-3">
        <motion.div className="card" whileHover={{ scale: 1.03 }}>
          <a
            href="https://github.com/jeisson300/CoinApp?tab=readme-ov-file"
            target="_blank"
          >
            <img
              style={{
                width: 35,
                position: 'absolute',
                zIndex: '1',
                marginLeft: '18rem',
              }}
              src={github}
              alt="github"
            />
          </a>
          <img src={coinAppImage} alt="prohect1"></img>
          <div className="card-body">
            <span>
              <b>Coin App</b>
            </span>
            <p style={{ textAlign: 'justify' }}>
              Demo para manejar finanzas personales, es una aplicacion que
              realice para practicar conceptos de react principalmente, ademas
              que, realice el mismo bancked con dos tecnologias diferentes, las
              cuales fueron .Net 7 con Sql Server y Nodejs con Mongodb.
            </p>
            <hr />
            <div className="row">
              <div className="col">
                <img style={{ width: 30 }} src={reacticon} alt="react" />
              </div>
              <div className="col">
                <img style={{ width: 30 }} src={csharpicon} alt="c" />
              </div>
              <div className="col">
                <img style={{ width: 30 }} src={sqlicon} alt="sql" />
              </div>
              <div className="col">
                <img style={{ width: 30 }} src={nodejs} alt="node" />
              </div>
              <div className="col">
                <img style={{ width: 30 }} src={mongodb} alt="mongo" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="col-3">
        <motion.div className="card" whileHover={{ scale: 1.03 }}>
          <a href="https://github.com/jeisson300/portfolio2" target="_blank">
            <img
              style={{
                width: 35,
                position: 'absolute',
                zIndex: '1',
                marginLeft: '18rem',
              }}
              src={github}
              alt="github"
            />
          </a>
          <img src={portfolioImage} alt="portafolio2"></img>
          <div className="card-body">
            <span>
              <b>Portafolio v2</b>
            </span>
            <p style={{ textAlign: 'justify' }}>
              Mi portafolio v2, este proyecto lo realice con un fin de poder ser
              creativo y probar cosas nuevas, como animaciones con framer
              motion, para incluirlos en mis futuros MVPS
            </p>
            <hr />
            <div className="row">
              <div className="col">
                <img style={{ width: 30 }} src={reacticon} alt="react" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
