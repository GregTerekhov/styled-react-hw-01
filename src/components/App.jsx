import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendsList/FriendsList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import data from '../Data/data.json';
import friends from '../Data/friends.json';
import transactions from '../Data/transactions.json';

const App = () => {
  return (
    <div>
      <Profile />
      <Statistics
        title={data.title}
        label={data.label}
        percentage={data.percentage}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
