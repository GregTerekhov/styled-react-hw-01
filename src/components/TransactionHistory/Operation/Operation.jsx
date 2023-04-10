import PropTypes from 'prop-types';
import { TableRows, Td } from './Operation.styled';

export const Operation = ({ type, amount, currency }) => {
  return (
    <TableRows>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </TableRows>
  );
};

Operation.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
