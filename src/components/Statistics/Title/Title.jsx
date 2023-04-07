import PropTypes from 'prop-types';
import css from './Title.module.css';

const Title = ({ title }) => {
  return title && <h2 className={css.title}>{title}</h2>;
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;

//{ <h2 className={css.title}>{title ? title : "Upload stats"}</h2> }
