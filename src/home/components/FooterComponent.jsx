import React from 'react';
import linkicon from '../../assets/linkdin.svg';
import githubicon from '../../assets/github.svg';
export const FooterComponent = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="column">
            <p>© Copyright 2024 Jose Jeisson Ceballos leal - Web Developer</p>
          </div>
        </div>
        <div className="row footer_icon">
          <a
            href="https://www.linkedin.com/in/jose-jeisson-ceballos-leal-877026171/"
            target="_blank"
          >
            <img style={{ width: 30 }} src={linkicon} alt="link" />
          </a>
          <a href="https://github.com/jeisson300" target="_blank">
            <img style={{ width: 30 }} src={githubicon} alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};
