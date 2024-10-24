import ReactJson from 'react-json-view';
import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { RENDER_API_ENDPOINT } from '../utils/constants';
import customAxiosInstance from '../utils/customAxios';

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [privateUsers, setPrivateUsers] = useState(null);

  useEffect(() => {
    const fetchPrivateUsers = async () => {
      const res = await customAxiosInstance.get(
        `${RENDER_API_ENDPOINT}/api-v1/users/private/get_all`
      );
      setPrivateUsers(res.data);
    };
    if (isAuthenticated) fetchPrivateUsers();
  }, [isAuthenticated]);

  if (!isAuthenticated) return null;

  return (
    <div className="dashboard">
      <div className="user-from-auth0">
        <div className="title">Current user from Auth0:</div>
        <div className="preview-user">
          {isLoading ? (
            <div className="loading">Loading...</div>
          ) : (
            <>
              <img
                className="user-avatar"
                src={user?.picture}
                alt={user?.name}
              />
              <div className="user-info">
                <p>
                  Sub: <span className="value">{user?.sub}</span>
                </p>
                <p>
                  Email: <span className="value">{user?.email}</span>
                </p>
                <p>
                  Name: <span className="value">{user?.name}</span>
                </p>
              </div>
            </>
          )}
        </div>
        {user && (
          <div className="more-info">
            <ReactJson
              enableClipboard={false}
              collapsed={true}
              theme={'google'}
              src={user}
            />
          </div>
        )}
      </div>

      <div className="user-from-our-database">
        <div className="title">
          All user from our database: {privateUsers?.length}
        </div>
        <img
          className="user-avatar"
          src={
            'https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/447709831_2142700316096950_7950542593462786610_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFO508ltptf6k63LzoURpmBMuFtQN4uAPMy4W1A3i4A8yE-aaGhzw-gNDjCge-c6XTm3NR61q2UMrXym5kLHQ9U&_nc_ohc=hjNv-91PJCIQ7kNvgEaQthz&_nc_ht=scontent.fhan19-1.fna&_nc_gid=A0QlGOUq39I0s-sU2uxwYO7&oh=00_AYDRG6htw8cKkXfVr9Pm83g91dXJmpOhAAvRnw8Xf3p_JQ&oe=66FCAF80'
          }
          alt={'Bach Nguyen'}
        />
        {!privateUsers ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="more-info">
            <ReactJson
              enableClipboard={false}
              collapsed={true}
              theme={'google'}
              src={{
                given_name: 'Ragdoll',
                family_name: 'Cats',
                nickname: 'bachnguyen2',
                name: 'Bach Nguyen',
                picture:
                  'https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/447709831_2142700316096950_7950542593462786610_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFO508ltptf6k63LzoURpmBMuFtQN4uAPMy4W1A3i4A8yE-aaGhzw-gNDjCge-c6XTm3NR61q2UMrXym5kLHQ9U&_nc_ohc=hjNv-91PJCIQ7kNvgEaQthz&_nc_ht=scontent.fhan19-1.fna&_nc_gid=A0QlGOUq39I0s-sU2uxwYO7&oh=00_AYDRG6htw8cKkXfVr9Pm83g91dXJmpOhAAvRnw8Xf3p_JQ&oe=66FCAF80',
                updated_at: '2024-07-10T09:59:37.603Z',
                email: 'bachnguyen@gmail.com',
                email_verified: true,
                sub: 'google-oauth2|108184243235574894333',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
