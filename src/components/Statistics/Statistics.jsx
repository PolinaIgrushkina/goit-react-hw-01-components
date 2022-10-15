import Statistic from "./Statistic";
import PropTypes from 'prop-types';

function Statistics({title, stats}) {
  return (
  <section class="statistics">
  <h2 class="title">{title}</h2>

      <ul class="stat-list">
        {stats.map(item => (
          <Statistic
              key={item.id}
              label={item.label}
              percentage={item.percentage}
            />
      ))}
  </ul>
</section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
}


export default Statistics;