import React from 'react';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Contact from './Pages/contact';
import Home from './Pages/home';
import Products from './Pages/products';
import './App.css';

function App() {
  return (
    <div className='App'>
    <BrowserRouter >
      <Navbar />
      <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/contact'  element = {<Contact/>}/>
          <Route path='/products'  element = {<Products/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter >
    </div>

  );
}

export default App;
