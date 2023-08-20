import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import initFacebookSDK from "./initFacebookSDK";
// note you need to enable the JavaScript for the Facebook SDK here: https://www.youtube.com/watch?v=gXux8b3wcYw 

const renderApp = () => {
    // Create a root instance
    const root = ReactDOM.createRoot(document.getElementById("root"));
    
    // Use the render method on the root instance
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
};

initFacebookSDK().then(() => {
    renderApp();
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
