import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import user from '../Data/user.json';
import data from '../Data/data.json';

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics
        title={data.title}
        label={data.label}
        percentage={data.percentage}
      />
    </div>
  );
};

export default App;
