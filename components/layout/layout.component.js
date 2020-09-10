import Footer from 'components/footer';
import Header from 'components/header';
import React from 'react';
const Layout = props =>
  <div className="mainLayout">
    <Header></Header>
    <main className="main">
      {props.children}
    </main>
    <Footer></Footer>
  </div>

export default Layout
