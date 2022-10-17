import PropTypes from 'prop-types';
import { TableRow } from './TransactionHistory.styled';

function Transaction({ type, amount, currency }) {
  return (
    <TableRow>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TableRow>
  );
}

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}

export default Transaction;