import styled from '@emotion/styled';

export const ProfileCard = styled.div`
width: 270px;
height: 350px;
margin: 20px;

display: flex;
flex-direction: column;
justify-content: space-between;

background: #FFFFFF;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 0px 0px 4px 4px;
`;

export const Description = styled.div`
padding-top: 30px;
padding-bottom: 30px;
`;

export const Photo = styled.img`
width: 100px;
border-radius: 50%;
margin-left: 85px;
`;

export const Name = styled.p`
font-weight: 700;
font-size: 16px;
line-height: 1.19;
text-align: center;
letter-spacing: 0.03em;
color: #212121;
`;

export const Tag = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 1.19;
text-align: center;
letter-spacing: 0.03em;
color: #757575;
`;

export const Location = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 1.19;
text-align: center;
letter-spacing: 0.03em;
color: #757575;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;

  height: 100px;

  margin: 0;
  padding-left: 20px;
  padding-right: 20px;
  background: #F5F4FA;
  border-top: 1px solid #AFB1B8;
`;

export const StatsItem = styled.li`
display: flex;
flex-direction: column;
text-align: center;
`;

export const Label = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 1.19;
text-align: center;
letter-spacing: 0.03em;
color: #757575;
margin-bottom: 0;
`;

export const Quantity = styled.span`
font-weight: 700;
font-size: 16px;
line-height: 1.19;
text-align: center;
letter-spacing: 0.03em;
color: #212121;
`;
