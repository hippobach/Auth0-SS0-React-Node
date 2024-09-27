import ReactJson from 'react-json-view';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="user-from-auth0">
        <div className="title">User from Auth0:</div>
        <div className="preview-user">
          {/* <div className="loading">Loading...</div> */}
          <img
            className="user-avatar"
            src={
              'https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/447709831_2142700316096950_7950542593462786610_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFO508ltptf6k63LzoURpmBMuFtQN4uAPMy4W1A3i4A8yE-aaGhzw-gNDjCge-c6XTm3NR61q2UMrXym5kLHQ9U&_nc_ohc=hjNv-91PJCIQ7kNvgEaQthz&_nc_ht=scontent.fhan19-1.fna&_nc_gid=A0QlGOUq39I0s-sU2uxwYO7&oh=00_AYDRG6htw8cKkXfVr9Pm83g91dXJmpOhAAvRnw8Xf3p_JQ&oe=66FCAF80'
            }
            alt={'Bach Nguyen'}
          />
          <div className="user-info">
            <p>
              Sub:{' '}
              <span className="value">google-oauth2|108184243235574894333</span>
            </p>
            <p>
              Email: <span className="value">bachnguyen@gmail.com</span>
            </p>
            <p>
              Name: <span className="value">Bach Nguyen</span>
            </p>
          </div>
        </div>
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
              email: 'bachnguyen2@gmail.com',
              email_verified: true,
              sub: 'google-oauth2|108184243235574894333',
            }}
          />
        </div>
      </div>

      <div className="user-from-our-database">
        <div className="title">User from our database:</div>
        <div className="preview-user">
          {/* <div className="loading">Loading...</div> */}
          <img
            className="user-avatar"
            src={
              'https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/447709831_2142700316096950_7950542593462786610_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFO508ltptf6k63LzoURpmBMuFtQN4uAPMy4W1A3i4A8yE-aaGhzw-gNDjCge-c6XTm3NR61q2UMrXym5kLHQ9U&_nc_ohc=hjNv-91PJCIQ7kNvgEaQthz&_nc_ht=scontent.fhan19-1.fna&_nc_gid=A0QlGOUq39I0s-sU2uxwYO7&oh=00_AYDRG6htw8cKkXfVr9Pm83g91dXJmpOhAAvRnw8Xf3p_JQ&oe=66FCAF80'
            }
            alt={'Bach Nguyen'}
          />
          <div className="user-info">
            <p>
              ID: <span className="value">random-108184243235574894333</span>
            </p>
            <p>
              Email: <span className="value">bachnguyen@gmail.com</span>
            </p>
            <p>
              Name: <span className="value">Bach Nguyen</span>
            </p>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default Dashboard;
