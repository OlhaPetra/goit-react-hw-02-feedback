import React, { Component } from 'react';
import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrFeedback = e => {
    const grade = e.currentTarget.name;
    this.setState(prevState => {
      return {
        [grade]: prevState[grade] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100,
    );
    return positiveFeedbackPercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onClickBtn={this.incrFeedback}
          />
          {this.countTotalFeedback() === 0 && (
            <Notification message="No feedback given" />
          )}
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={this.countTotalFeedback()}
            positiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default App;
