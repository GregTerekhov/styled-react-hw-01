import ProfileDescription from './ProfileDescription/ProfileDescription';
import user from '../../Data/user.json';
import css from './Profile.module.css';
import ProfileStats from './ProfileStats/ProfileStats';

const Profile = () => {
  return (
    <div className={css.profile}>
      <ProfileDescription
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <ProfileStats
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
};

export default Profile;
