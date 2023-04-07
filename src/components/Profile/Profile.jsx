import ProfileDescription from './ProfileDescription';
import user from '../../Data/user.json';
import css from './Profile.module.css';
import ProfileStats from './ProfileStats';

const Profile = () => {
  return (
    <div className={css.profile}>
      <ProfileDescription
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <ProfileStats stats={user.stats} />
    </div>
  );
};

export default Profile;
