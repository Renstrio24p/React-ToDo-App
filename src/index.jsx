import React from "react";
import ReactDOM from "react-dom/client";
import ReactApp from "./react-18/react";

import '@fontsource/poppins'
import '@fontsource/poppins/100.css'
import '@fontsource/poppins/200.css'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
import '@fontsource/poppins/900.css'

import "https://kit.fontawesome.com/6b203b1712.js";
import './index.css'
import Start from "./start"; 

const DOM = ReactDOM.createRoot(document.getElementById("root"));
DOM.render(
    <React.StrictMode>
            <Start />
    </React.StrictMode>
);
