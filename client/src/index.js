import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./styles/sb-admin-2.min.css";
import {BrowserRouter} from 'react-router-dom';
// imports for the dashboards
import {Provider} from "react-redux";
import store from "./store/store";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


ReactDOM.render(
  
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  ,
  document.querySelector('#root')
);

serviceWorker.unregister();

