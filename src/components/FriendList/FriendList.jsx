import PropTypes from 'prop-types';
import Friend from './FriendListItem';
import { FriendsList } from './FriendList.styled';

function FriendList({friends}) {
  return (
    <FriendsList>
      {friends.map(friend => (
          <Friend
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
      ))}
    </FriendsList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
  //id: PropTypes.string.isRequired,
}

export default FriendList;