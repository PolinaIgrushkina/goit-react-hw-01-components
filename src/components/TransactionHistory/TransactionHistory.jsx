import PropTypes from 'prop-types';
import Transaction from './Transaction';
import { Table, TableHead, TableBody } from './TransactionHistory.styled';

function TransactionHistory({ items }) {
  return (
    <Table>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>

      <TableBody>
        {items.map(item => (
          <Transaction
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
        ))}
      </TableBody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TransactionHistory;

