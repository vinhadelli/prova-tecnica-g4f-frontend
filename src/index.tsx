import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Menu from './routes/menu';
import Cep from './routes/cep';
import Noticia from './routes/noticia';
import CriarNoticia from './routes/noticia/criar';
import ListarNoticia from './routes/noticia/listar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children: [
      {
        path: "/cep",
        element: <Cep />,
      },
      {
        path: "/noticia",
        element: <Noticia />,
      },
      {
        path: "/noticia/listar",
        element: <ListarNoticia />,
      },
      {
        path: "/noticia/criar",
        element: <CriarNoticia />,
      },
      {
        path: "/noticia/atualizar/:id",
        element: <CriarNoticia />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
