import { StatisticList, Text } from './Statistic.styled';
import PropTypes from 'prop-types'; // ES6

export const Statistic = ({ marks, total, procent }) => {
  return (
    <StatisticList>
      {Object.entries(marks).map(([key, value], index) => (
        <li key={index}>
          <Text>
            {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
          </Text>
        </li>
      ))}
      <li>
        <Text>Total: {total}</Text>
      </li>
      <li>
        <Text>Positive feedback: {procent}%</Text>
      </li>
    </StatisticList>
  );
};

Statistic.propTypes = {
  marks: PropTypes.objectOf(PropTypes.number),
  total: PropTypes.number,
  procent: PropTypes.number,
};
