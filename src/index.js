import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Home';
import Curso from "./Curso"
import "./styles/normalize.css"
import "./styles/index.css"
import Sugerencias from "./sugerencias";

const router = createBrowserRouter([
    {
        path : "/",
        element: <Home/>,

    },
    {
        path: "/curso/:name",
        element: <Curso/>
    },
    {
        path: "/sugerencias",
        element: <Sugerencias/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

