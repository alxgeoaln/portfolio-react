import React, { Component } from 'react';
import './App.css';
import './components/Header/Header';
import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class App extends Component {

  render() {
    return (
      <div className='container'  id="intro-section">
        <Header/>
        <About/>
        <Services/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
