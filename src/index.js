import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
const cupt = window.location.pathname;

if (cupt=='/'){
  root.render(<Home/>)
}
else if(cupt=="/about"){
  root.render(<About/>)
}
else if(cupt=="/contact"){
  root.render(<Contact/>)
}



