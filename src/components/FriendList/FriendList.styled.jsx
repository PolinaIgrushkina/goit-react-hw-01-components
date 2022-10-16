import styled from '@emotion/styled';

export const FriendsList = styled.ul`
margin-top: 20px;
`;

export const FriendListItem = styled.li`
display: flex;
flex-direction: row;
align-items: center;
gap: 10px;

width: 270px;
max-height: 50px;
margin-bottom: 10px;
padding: 4px;

background: #FFFFFF;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 4px 4px 4px 4px;
`;

export const Avatar = styled.img`
border-radius: 25%;
`;

export const Name = styled.p`
font-weight: 400;
font-size: 17px;
line-height: 1.17;
letter-spacing: 0.02em;
`;

export const Status = styled.span` 

`;