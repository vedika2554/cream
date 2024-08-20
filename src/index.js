import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
  {
    "path":'/',
    "element":<Home/>
  },
  {
    "path":'/about',
    "element":<About/>
  },
  {
    "path":'/contact',
    "element":<Contact/>
  }

])

root.render(<RouterProvider router={router}/>)

