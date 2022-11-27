import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import Apping from './Apping';
import DisplayAlert from './Client/Context/Alert';
// import UserInfo from './Client/Context/UserDetails';
import OrdersInfo from './Client/Context/UserOrderInfo';
import { Provider } from 'react-redux'
import { Store, persistor } from './Client/REDUX/StoreRedux/Store'
import { PersistGate } from 'redux-persist/integration/react'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* wrap redux around our app */}
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>

        <DisplayAlert>
          {/* <UserInfo> */}
          <OrdersInfo>
            <Apping />
          </OrdersInfo>
          {/* </UserInfo> */}
        </DisplayAlert>

      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals())
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
