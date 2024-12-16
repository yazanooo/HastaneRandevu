import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Doktor from './Pages/doktor';
import Home from './Pages/Home';
import Appointment from './Pages/appointment';
import Log_in from './Pages/Login';
import Register from './Pages/Register';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/doktor",
    element: <Doktor/>,
  },
  {
    path: "/appointment",
    element: <Appointment/>,
  },
  {
    path: "/log-in",
    element: <Log_in/>,
  },
  {
    path: "/register",
    element: <Register />
  },


  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
