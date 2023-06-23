import { Component } from 'react';
import { Section } from './Section/Section';
import { Feedback } from './Feedback/Feedback';
import { Statistic } from './Statistic/Statistic';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleAddMark = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((prev, next) => prev + next, 0);
  };
  render() {
    const total = this.countTotalFeedback() || 0;
    const positiveProcent = Math.trunc((this.state.good / total) * 100) || 0;
    return (
      <Section>
        <Feedback addMark={this.handleAddMark} />
        <Statistic marks={this.state} total={total} procent={positiveProcent} />
      </Section>
    );
  }
}
