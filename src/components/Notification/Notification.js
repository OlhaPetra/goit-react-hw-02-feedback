import React from 'react';
import s from './Notification.module.css';

function Notification({ message, totalFeedback }) {
  return (
    <div>{totalFeedback === 0 && <p className={s.text}>{message}</p>}</div>
  );
}

export default Notification;
