import React from 'react';
import s from './Feedback.module.css';

function Feedback({ onClickGood, onClickNeutral, onClickBad }) {
  return (
    <div className={s.feedback}>
      <button
        className={`${s.button} ${s.good}`}
        type="button"
        onClick={onClickGood}
      >
        Good
      </button>
      <button
        className={`${s.button} ${s.neutral}`}
        type="button"
        onClick={onClickNeutral}
      >
        Neutral
      </button>
      <button
        className={`${s.button} ${s.bad}`}
        type="button"
        onClick={onClickBad}
      >
        Bad
      </button>
    </div>
  );
}

export default Feedback;
