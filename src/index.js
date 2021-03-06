import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
// import reportWebVitals from './reportWebVitals';

import { Provider, connect } from "react-redux";
import store from "./store";
import './assets/scss/app.scss';

const ReduxApp = connect((state, ownProps) => ({state: state, ownProps: ownProps}), null)(App);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ReduxApp />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
