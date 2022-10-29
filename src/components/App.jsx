import React, { Component } from 'react';
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

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, bad, neutral } = this.state;
    return Math.round((good / (good + (bad + neutral))) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const feedback = this.countPositiveFeedbackPercentage();
    return (
      <Div className="common-feedback">
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title={'Statistics'}>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              feedback={feedback}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Div>
    );
  }
}

export default App;
