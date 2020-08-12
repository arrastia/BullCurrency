import React, { Fragment, useEffect, useState } from 'react';

import { Styles } from './Countdown.styles';

import { SupportUs } from './.components/SupportUs';

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
    if (!timeLeft[timeElement]) return;

    timer.push(
      <Styles.TimeInterval key={index}>
        <Styles.TimeElement id={timeElement}>{timeLeft[timeElement]}</Styles.TimeElement>
        {timeElement}
      </Styles.TimeInterval>
    );
  });

  return (
    <Fragment>
      {timer.length ? <Styles.Countdown>{timer}</Styles.Countdown> : <Styles.TimeOver>Still working</Styles.TimeOver>}
      <SupportUs />
    </Fragment>
  );
};
