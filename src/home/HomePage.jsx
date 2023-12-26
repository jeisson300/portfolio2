import React from 'react';
import { AboutComponent } from './components/AboutComponent';
import { FooterComponent } from './components/FooterComponent';
import { ProjectComponent } from './components/ProjectComponent';
import { SkillsComponent } from './components/SkillsComponent';
import codeicon from '../assets/code.svg';
export const HomePage = () => {
  return (
    <>
      <header>
        <h1 className="titleHome">
          <img style={{ width: 50 }} src={codeicon} alt="code" />
          Jeisson Ceballos - Web Developer
        </h1>
      </header>
      <hr style={{ color: 'white', marginLeft: '10px' }} />
      <main>
        <div className="row mx-5">
          <section className="col-5 mx-5">
            <AboutComponent />
          </section>
          <section className="col-3 mx-5">
            <SkillsComponent />
          </section>
        </div>
        <div className="row">
          <section className="col-12">
            <ProjectComponent />
          </section>
        </div>
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </>
  );
};
