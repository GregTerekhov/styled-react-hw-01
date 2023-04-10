import PropTypes from 'prop-types';
import { Operation } from './Operation/Operation';
import {
  TransactionTable,
  TableHead,
  TableBody,
  Th,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableHead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </TableHead>
      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <Operation key={id} type={type} amount={amount} currency={currency} />
        ))}
      </TableBody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
