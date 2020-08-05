const calculateTimeLeft = () => {
  const difference = new Date('2020/12/26') - new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: ('0' + Math.floor(difference / (1000 * 60 * 60 * 24))).slice(-2),
      hours: ('0' + Math.floor((difference / (1000 * 60 * 60)) % 24)).slice(-2),
      minutes: ('0' + Math.floor((difference / 1000 / 60) % 60)).slice(-2),
      seconds: ('0' + Math.floor((difference / 1000) % 60)).slice(-2)
    };
  }

  return timeLeft;
};

export const CountdownUtils = { calculateTimeLeft };
