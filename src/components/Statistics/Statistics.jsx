import StatisticsList from './StatisticsList/StatisticsList';
import Title from './Title/Title';
import data from '../../Data/data.json';
import css from './Statistics.module.css';

const Statistics = () => {
  return (
    <section className={css.statistics}>
      <Title title={data.title} />
      <StatisticsList stats={data} />
    </section>
  );
};

export default Statistics;
