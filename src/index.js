import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './redux-store/store';
import { PersistGate } from 'redux-persist/integration/react';
import Spinner from './components/Spiner/Spiner';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <BrowserRouter basename="/">
          <App
            style={{
              width: '100%',
              alignItems: 'center',
              backgrounColor: 'rgb(232, 232, 232)',
              color: '#010101',
            }}
          />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
