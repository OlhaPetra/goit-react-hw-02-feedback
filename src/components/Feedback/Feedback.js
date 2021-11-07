import React from 'react';
import s from './Feedback.module.css';

function Feedback({ onClickBtn }) {
  return (
    <div className={s.feedback}>
      <button
        className={`${s.button} ${s.good}`}
        type="button"
        name="good"
        onClick={onClickBtn}
      >
        Good
      </button>
      <button
        className={`${s.button} ${s.neutral}`}
        type="button"
        name="neutral"
        onClick={onClickBtn}
      >
        Neutral
      </button>
      <button
        className={`${s.button} ${s.bad}`}
        type="button"
        name="bad"
        onClick={onClickBtn}
      >
        Bad
      </button>
    </div>
  );
}

export default Feedback;
