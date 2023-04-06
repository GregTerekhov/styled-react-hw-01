// import PropTypes from 'prop-types';
import StatisticsList from './StatisticsList';
import Title from './Title';
import data from '../../Data/data.json';
import css from './Statistics.module.css';

const Statistics = () => {
  return (
    <section className={css.statistics}>
      <Title title={data.title} />
      <StatisticsList items={data} />
    </section>
  );
};

export default Statistics;
