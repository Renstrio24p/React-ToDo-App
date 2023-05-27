import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "https://kit.fontawesome.com/6b203b1712.js";
import "./index.css";
import Start from "./start"; 
import { Store } from "./ToDo-List/storage/store";

const DOM = ReactDOM.createRoot(document.getElementById("root"));
DOM.render(
    <React.StrictMode>
        <Provider store={Store}>
            <Start />
        </Provider>
    </React.StrictMode>
);
