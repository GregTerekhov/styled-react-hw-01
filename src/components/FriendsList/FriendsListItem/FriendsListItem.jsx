import PropTypes from 'prop-types';
import {
  FriendsItem,
  FriendName,
  Avatar,
  StatusOnline,
  StatusOffline,
} from './FriendsListItem.styled';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem>
      {isOnline ? <StatusOnline /> : <StatusOffline />}
      <Avatar src={avatar} alt="User avatar" />
      <FriendName>{name}</FriendName>
    </FriendsItem>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
