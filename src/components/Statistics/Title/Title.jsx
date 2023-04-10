import PropTypes from 'prop-types';
import { TitleStat } from './Title.styled';

export const Title = ({ title }) => {
  return <TitleStat>{title}</TitleStat>;
};

Title.propTypes = {
  title: PropTypes.string,
};
