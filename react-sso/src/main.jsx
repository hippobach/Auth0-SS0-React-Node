import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { RENDER_API_ENDPOINT } from './utils/constants.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-36l1kpwvov80hkg5.us.auth0.com"
    clientId="kKEWaEqzvDRx6JdF6A3JFNlt33BCzkfb"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: RENDER_API_ENDPOINT, // cần audience để nhận được valid jwt token từ Auth0
    }}
    // Refresh Tokens
    useRefreshTokens={true}
    useRefreshTokensFallback={true}
    // SSO
    cookieDomain=".nxb.local"
    cacheLocation="memory" // default: memory, để sử dụng SSO (đăng nhập, đăng xuất) thì chuyển về memory
  >
    <App />
  </Auth0Provider>
);
