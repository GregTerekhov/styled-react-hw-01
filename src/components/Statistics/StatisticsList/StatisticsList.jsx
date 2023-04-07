import PropTypes from 'prop-types';
import Item from '../Item/Item';
import { getRandomHexColor } from 'functions';
import css from './StatisticsList.module.css';

const StatisticsList = ({ stats }) => {
  return (
    <ul className={css.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li
          className={css.item}
          key={id}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <Item label={label} percentage={percentage} />
        </li>
      ))}
    </ul>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default StatisticsList;
