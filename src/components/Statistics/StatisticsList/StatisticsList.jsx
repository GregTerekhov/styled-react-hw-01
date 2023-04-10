import PropTypes from 'prop-types';
import { Item } from '../Item/Item';
import { getRandomHexColor } from 'functions';
import { StatList, ListItem } from './StatisticsList.styled';

export const StatisticsList = ({ items }) => {
  const reducedData = items.reduce((result, current) => {
    const existingObj = result.find(obj => obj.label === current.label);

    if (existingObj) {
      existingObj.percentage += current.percentage;
    } else {
      result.push(current);
    }

    return result;
  }, []);
  return (
    <StatList>
      {reducedData.map(({ id, label, percentage }) => (
        <ListItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
          <Item label={label} percentage={percentage} />
        </ListItem>
      ))}
    </StatList>
  );
};

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
