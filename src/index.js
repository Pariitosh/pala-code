import React from "react";
import ReactDOM  from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./app";

ReactDOM.render(<HashRouter basename={process.env.PUBLIC_URL} ><App></App></HashRouter>,document.getElementById('root'));
