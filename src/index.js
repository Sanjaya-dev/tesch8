import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {LandingPage,SearchMobil,Login, Protected} from './components';
import{
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import {createStore,compose,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/search" element={<Protected><SearchMobil /></Protected>}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
