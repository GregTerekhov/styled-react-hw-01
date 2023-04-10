import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Label, Percentage } from './Item.styled';

export const Item = ({ label, percentage }) => {
  return (
    <Fragment>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Fragment>
  );
};

Item.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
