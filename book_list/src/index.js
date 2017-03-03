import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app';
import reducers from './reducers';
// does this inherit all of the files in reducers? I would have written './reducers/**'

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    // @note: Provider is a component inherited from react-redux.
    // @question: what does this component support?
    // @note: createStore is a function inherited from redux.
    // @question: how does this function manage redux's state or reducers dispatcher?
    <App />
  </Provider>
  , document.querySelector('.container'));
