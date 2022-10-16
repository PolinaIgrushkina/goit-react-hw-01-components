import Statistic from "./Statistic";
import PropTypes from 'prop-types';
import { StatisticsSection, Title, StatisticList } from './Statistics.styled';

function Statistics({title, stats}) {
  return (
  <StatisticsSection>
  <Title>{title}</Title>

      <StatisticList>
        {stats.map((item, index) => (
          <Statistic
              key={item.id}
              label={item.label}
              percentage={item.percentage}
            />
      ))}
  </StatisticList>
</StatisticsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
}


export default Statistics;