import React from 'react';
import PropTypes from 'prop-types';
import s from './Notification.module.css';

function Notification({ message, totalFeedback }) {
  return (
    <div>{totalFeedback === 0 && <p className={s.text}>{message}</p>}</div>
  );
}

Notification.propTypes = {
  message: PropTypes.string,
  totalFeedback: PropTypes.number,
};

export default Notification;
