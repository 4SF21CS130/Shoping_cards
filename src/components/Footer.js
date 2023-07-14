import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3">
        &copy; {new Date().getFullYear()} Your Website Name
      </div>
    </footer>
  );
};

export default Footer;
