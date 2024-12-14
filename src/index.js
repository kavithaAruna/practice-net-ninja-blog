import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router';

// previously used ReactDOM.render for React applictaions but now using 
// ReactDOM.createRoot which has concurrent rendering allows React to work 
// on multiple tasks simultaneously. 

//React.StrictMode does strict checks and gives warnings if there are any 
//in the console
//injects the App component inside the html file -> div id="root".
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
