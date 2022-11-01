import { useState } from 'react';
import { FeedbackOptions } from '../components/FeedbackOptions/FeedbackOptions';
import Statistics from '../components/Statistics/Statistics';
import Section from '../components/Section/Section';
import Notification from './Notifications/Notification';
import styled from 'styled-components';

const Div = styled.div`
  background-color: lightgrey;
  display: inline-block;
  text-align: center;
  border: 1px solid grey;
  border-radius: 5%;
  margin-top: 30px;
  margin-left: 30px;
  box-shadow: 20px 20px 50px 10px pink inset;
`;

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  const positiveFeedback = Math.round((good / (good + (bad + neutral))) * 100);

  const onLeaveFeedback = type => {
    switch (type) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        throw new Error(`Uknows feedback type - ${type}`);
    }
  };

  return (
    <Div className="common-feedback">
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title={'Statistics'}>
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            feedback={positiveFeedback}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Div>
  );
};

export default App;
