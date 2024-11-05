import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import './App.css';
import Dashboard from './pages/Dashboard';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { injectFn } from './utils/customAxios';

function App() {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  injectFn(getAccessTokenSilently);

  useEffect(() => {
    const checkSSO = async () => {
      try {
        await getAccessTokenSilently();
      } catch (error) {
        console.log('Error checkSSO: ', error);
      }
    };
    checkSSO();
    // chỉ chạy 1 lần useEffect() khi khởi tạo
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app-container">
      <div className="fixed-box">
        <h1>Auth0 SSO 01 | Bach Nguyen</h1>
        <div className="actions">
          {isLoading ? (
            <div className="loading">Loading...</div>
          ) : !isAuthenticated ? (
            <LoginButton />
          ) : (
            <LogoutButton />
          )}
        </div>
        {/* Phần dashboard sau khi đăng nhập */}
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
