import PropTypes from 'prop-types';
import { Fragment } from 'react';
import css from './Item.module.css';

const Item = ({label, percentage}) => {
    return  <Fragment>
     <span className={css.label}>{label}</span>
     <span className={css.percentage}>{percentage}%</span>
   </Fragment>
}

Item.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number,
}

export default Item;