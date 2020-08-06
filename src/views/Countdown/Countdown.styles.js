import styled from 'styled-components';

const Countdown = styled('ul')`
  margin: auto;
  padding: 0;

  @media screen and (max-width: 414px) {
    display: grid;
    grid-template-columns: auto auto;
  }
`;

const TimeElement = styled('span')`
  display: block;
  font-size: 9vmin;

  @media screen and (max-width: 414px) {
    font-size: 15vmin !important;
  }
`;

const TimeInterval = styled('li')`
  display: inline-block;
  font-size: 3vmin;
  font-weight: 100;
  letter-spacing: 1vmin;
  list-style-type: none;
  padding: 2vmin;
  text-transform: uppercase;

  @media screen and (max-width: 414px) {
    font-size: 5vmin !important;
  }
`;

const TimeOver = styled('span')`
  font-size: 10vmin;
  font-weight: 100;
  letter-spacing: 1vmin;
  text-transform: uppercase;
`;

export const Styles = { Countdown, TimeElement, TimeInterval, TimeOver };
