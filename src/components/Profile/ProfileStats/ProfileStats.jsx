import PropTypes from 'prop-types';
import { Stats, Label, Quantity } from './ProfileStats.styled';

export const ProfileStats = ({ stats }) => {
  return (
    <Stats>
      <li>
        <Label>Followers</Label>
        <Quantity>{stats.followers}</Quantity>
      </li>
      <li>
        <Label>Views</Label>
        <Quantity>{stats.views}</Quantity>
      </li>
      <li>
        <Label>Likes</Label>
        <Quantity>{stats.likes}</Quantity>
      </li>
    </Stats>
  );
};

ProfileStats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
