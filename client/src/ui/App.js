import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reducer from '../redux-store/reducers';
import Home from './pages/Home';

const composeEnhancers = composeWithDevTools({});
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(reduxThunk, reduxLogger))
);

const App = () => (
  <>
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </>
);

export default App;
