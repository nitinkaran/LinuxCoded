import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import { store } from './Redux/store';
import history from './Redux/history';

import 'bootstrap/dist/css/bootstrap.min.css';

import EcommerceComponent from './widget/Ecom.component';

const App = () => {
  return (
    <Provider store={store} history={history} >      
        <EcommerceComponent />
    </Provider>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

