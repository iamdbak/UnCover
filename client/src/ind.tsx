import React from "react";
import ReactDOM from "react-dom";
import "./ind.css";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {Provider} from "react-redux";
import store from "./store/store";
import Admin from "./components/Admin/Admin";



ReactDOM.render(<Provider store={store}><Admin /></Provider>, document.getElementById('root'));

// f you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
