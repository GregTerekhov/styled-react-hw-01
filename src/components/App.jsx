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
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
