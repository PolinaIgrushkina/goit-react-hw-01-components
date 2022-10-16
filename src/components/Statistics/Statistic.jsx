import PropTypes from 'prop-types';
import { StatisticItem, Label, Percentage } from './Statistics.styled';

function Statistic({label, percentage}) {
  return (
    <StatisticItem>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </StatisticItem>);
}

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}

export default Statistic;