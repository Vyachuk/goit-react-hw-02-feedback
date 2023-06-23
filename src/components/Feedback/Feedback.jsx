import { Button, List } from './Feedback.styled';
import PropTypes from 'prop-types'; // ES6

export const Feedback = ({ addMark }) => {
  const buttons = ['Good', 'Neutral', 'Bad'];
  return (
    <List>
      {buttons.map((btn, index) => (
        <li key={index}>
          <Button onClick={() => addMark(btn.toLowerCase())} type="button">
            {btn}
          </Button>
        </li>
      ))}
    </List>
  );
};

Feedback.propTypes = {
  addMark: PropTypes.func,
};
