import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-36l1kpwvov80hkg5.us.auth0.com"
    clientId="kKEWaEqzvDRx6JdF6A3JFNlt33BCzkfb"
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <App />
  </Auth0Provider>
);
