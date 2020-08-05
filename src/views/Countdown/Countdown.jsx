import React, { Fragment, useEffect, useState } from 'react';

import './Countdown.css';

import { CountdownUtils } from './.tools/Utils/CountdownUtils';

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(CountdownUtils.calculateTimeLeft());

  useEffect(() => {
    setInterval(() => {
      setTimeLeft(CountdownUtils.calculateTimeLeft());
    }, 1000);
  });

  const timer = [];

  Object.keys(timeLeft).forEach((timeElement, index) => {
    timer.push(
      <li key={index}>
        {timeElement}: {timeLeft[timeElement]}
      </li>
    );
  });

  return (
    <Fragment>
      <ul>{timer}</ul>
    </Fragment>
  );
};
