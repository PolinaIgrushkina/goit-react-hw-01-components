import PropTypes from 'prop-types';
import Friend from './FriendListItem';

function FriendList({friends}) {
  return (
    <ul class="friend-list">
      {friends.map(friend => (
          <Friend
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
  //id: PropTypes.string.isRequired,
}

export default FriendList;