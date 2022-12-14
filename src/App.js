import Root from './components/Root';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';

import Home from './components/Home';
import Statstic from './components/Statstic';
import ErrorPage from './components/ErrorPage';
import Quiz from './components/Quiz';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([


  {

    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {

        path: '/home',
        element: <Home></Home>,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz')

      },
      {

        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz')

      },

      {

        path: '/blog',
        element: <Blog></Blog>
      },
      {

        path: '/statistics',
        element: <Statstic></Statstic>,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz')


      },


      {
        path: '/home/:quizId',
        loader: async ({ params }) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)

        },
        element: <Quiz></Quiz>,
      }
    ]

  },


])


function App() {
  return (
    <div className="App">

      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
