import React from 'react';
import s from './Statistics.module.css';

function Statistics({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) {
  return (
    <>
      {totalFeedback > 0 && (
        <div className={s.statistics}>
          <h1 className={s.title}>Statistics</h1>
          <div className={s.statistics_data}>
            <p className={`${s.text} ${s.good}`}>Good: {good}</p>
            <p className={`${s.text} ${s.neutral}`}>Neutral: {neutral}</p>
            <p className={`${s.text} ${s.bad}`}>Bad: {bad}</p>
          </div>
          <div className={s.analitics}>
            <p className={s.analitics_text}>Total: {totalFeedback}</p>
            <p className={s.analitics_text}>
              Positive feedback:
              {good === 0 ? 0 : positiveFeedbackPercentage}%
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Statistics;
