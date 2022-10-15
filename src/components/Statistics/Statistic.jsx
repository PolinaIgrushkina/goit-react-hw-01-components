import PropTypes from 'prop-types';

function Statistic({label, percentage}) {
  return (
    <div>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </div>);
}

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}

export default Statistic;