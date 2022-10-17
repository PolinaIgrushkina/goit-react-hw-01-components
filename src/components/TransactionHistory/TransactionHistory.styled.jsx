import styled from '@emotion/styled';

export const Table = styled.table`
  width: 450px;
  margin: 20px;
  border: 1px solid #AFB1B8;
  text-align: center;
`;

export const TableHead = styled.thead`
  background-color: #2196F3;
  color: #FFFFFF;
  text-transform: uppercase;
`;

export const TableBody = styled.tbody`
  background-color: #FFFFFF;
  color: #757575;
  text-transform: capitalize;
`;

export const TableRow = styled.tr`
  :nth-of-type(odd) {
  background-color: #757575;
  color: #FFFFFF;
}`;
