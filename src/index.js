import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SnackbarProvider } from 'notistack';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Links } from './routes/Links';
import { Pix } from './routes/Pix';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

      {
        path: "/",
        element: <Links/>
      },
      {
        path: "/pix",
        element: <Pix/>
      },

    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SnackbarProvider
    icon={true}
    maxSnack={3}
    autoHideDuration={3000}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
  >
    <RouterProvider router={router} />
  </SnackbarProvider>
);

