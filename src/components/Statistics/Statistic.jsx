import PropTypes from 'prop-types';

function Statistic({label, percentage}) {
  return (
        <li class="item">
          <span class="label">{label}</span>
          <span class="percentage">{percentage}%</span>
        </li>);
}

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}

export default Statistic;