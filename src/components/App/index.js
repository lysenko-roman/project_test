import React from 'react';
import Header from '../static/Header';
import Footer from '../static/Footer';
import Router from '../Router';


import './style.scss';


function App() {
    console.log('render App')
  return (
    <div className='app'>
      <Header/>
        <main className='page'>

        <Router/>
        </main>

      <Footer/>
      </div>
  );
}

export default App;
