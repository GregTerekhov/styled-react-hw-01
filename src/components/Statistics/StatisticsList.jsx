// import PropTypes from 'prop-types';
import Item from './Item';
import { getRandomHexColor } from 'functions';
import css from './StatisticsList.module.css'

const StatisticsList = ({items}) => {
     return <ul className={css.statList}>
    {items.map(item => (
       <li className={css.item} key={item.id} style={{backgroundColor: getRandomHexColor()}}>
        <Item 
        label={item.label}
        percentage={item.percentage}
        />
        </li>
    ))}
  </ul>;
}

export default StatisticsList;