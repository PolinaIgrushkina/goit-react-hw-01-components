import PropTypes from 'prop-types';
import { FriendListItem } from './FriendList.styled';

function Friend({avatar, name, isOnline}) {
  return (
    <FriendListItem>
      <span class="status"></span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </FriendListItem>);
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}

export default Friend;