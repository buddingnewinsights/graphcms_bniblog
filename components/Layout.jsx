import React from 'react';
import Header from './Header';
import logo from '../public/logo.png'


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
