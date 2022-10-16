import PropTypes from 'prop-types';
import { FriendListItem, Status, Avatar, Name } from './FriendList.styled';
import { VscCircleLargeFilled } from "react-icons/vsc";

function Friend({avatar, name, isOnline}) {
  return (
    <FriendListItem>
      <Status>
        <VscCircleLargeFilled style={{fill: isOnline ? 'green' : 'red'}} />
      </Status>
      <Avatar src={avatar} alt="User avatar" width="48"></Avatar>
      <Name>{name}</Name>
    </FriendListItem>);
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}

export default Friend;