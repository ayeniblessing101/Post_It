import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="page-footer">
        <div className="footer-copyright">
          <div className="container">
          © 2017 Copyright PostIt
          <Link
            className="grey-text text-lighten-4 right"
            to="#!">
            Ayeni Blessing
          </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
