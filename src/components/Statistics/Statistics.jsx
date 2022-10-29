import PropTypes from 'prop-types';
import React from 'react';
import { Statistic } from './Statistics.styled';
const Statistics = ({ good, neutral, bad, total, feedback }) => {
  return (
    <Statistic>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {feedback}%</li>
    </Statistic>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  feedback: PropTypes.number.isRequired,
};

export default Statistics;
