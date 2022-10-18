import styled from '@emotion/styled';
import { randomColor } from '../../helpers/getRandomHexColor';

export const StatisticsSection = styled.section`
width: 450px;
height: 226px;
margin: 20px;

background: #FFFFFF;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 4px 4px 4px 4px;
`;

export const Title = styled.h2`
width: 450px;
height: 126px;

display: flex;
justify-content: center;
align-items: center;
margin: 0;

text-transform: uppercase;
color: #757575;
`;

export const StatisticList = styled.ul`
width: 450px;
height: 100px;

margin: 0;
padding-left: 0;
list-style-type: none;

display: flex;
justify-content: space-between;
`;

export const StatisticItem = styled.li`
width: 90px;
max-height: 100px;

display: flex;
flex-direction: column;
text-align: center;

padding-top: 15px;

background: ${props => randomColor(props.index)};
`;

export const Label = styled.span` 
color: #FFFFFF;
`;

export const Percentage = styled.span` 
margin-top: 10px;

font-weight: 400;
font-size: 27px;
line-height: 1.17;
letter-spacing: 0.02em;
color: #FFFFFF;
`;

