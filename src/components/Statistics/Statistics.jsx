import PropTypes from 'prop-types';
import { StatisticsList } from './StatisticsList/StatisticsList';
import { Title } from './Title/Title';
import { StatSection } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <Title title={title} />}
      <StatisticsList items={stats} />
    </StatSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
