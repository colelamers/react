import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {App, Test} from './js/App';
import ColeTest from './js/Cole';


ReactDOM.render(
  <React.StrictMode>
    <ColeTest />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Test />
  </React.StrictMode>,
  document.getElementById('component')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
