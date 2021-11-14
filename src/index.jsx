import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import store from "./state/store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

