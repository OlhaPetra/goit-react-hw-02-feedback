import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onClickBtn }) {
  return (
    <div className={s.feedback}>
      {options.map(option => (
        <button
          key={option}
          className={s.button}
          type="button"
          name={option}
          onClick={onClickBtn}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onClickBtn: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.string),
};

export default FeedbackOptions;
