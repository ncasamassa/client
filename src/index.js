import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import AllBlogs from './component/AllBlogs';
import NewBlogForm from './component/NewBlogForm';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  [
    {
      path: "/create-blog",
      element: <NewBlogForm />,
    },
    {
      path: "/blogs",
      element: <AllBlogs />,
    },
  ]
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);

