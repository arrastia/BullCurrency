import styled from 'styled-components';

const OutsideContent = styled('label')`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 2rem;
  font-weight: 150;
  justify-content: center;
  text-transform: uppercase;
  top: 0;
  transition: color 2s ease;
  z-index: 1;
`;

const Content = styled('div')`
  border: 0.075rem solid var(--bg);
  box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  left: 50%;
  padding: 0.625rem;
  transform: translateX(-50%);

  &:hover {
    ${OutsideContent} {
      transform: scale(1.15);
      transition: transform 0.1s ease;
    }
  }

  &,
  ${OutsideContent} {
    border-radius: 4rem;
    position: absolute;
    transition: 0.2s;
  }
`;

const InsideContent = styled('span')`
  align-items: center;
  background: transparent;
  border-radius: 5rem;
  border: 0;
  box-sizing: border-box;
  color: var(--text);
  display: flex;
  font-size: 0.875rem;
  font-weight: 200;
  font: inherit;
  height: 100%;
  justify-content: space-around;
  letter-spacing: 1vmin;
  opacity: 0;
  outline: 0;
  padding: 0 0.714rem;
  text-transform: uppercase;
  transform: scale(0.7);
  transition: 0s;
  width: 100%;
`;

const SupportUs = styled('div')`
  font-weight: 700;
  margin: auto;
  position: relative;

  &,
  ${Content}, ${OutsideContent} {
    height: 4rem;
    width: 4rem;
  }

  &.isOpened {
    ${Content} {
      width: 18.75rem;

      ${OutsideContent} {
        opacity: 0;
        transform: scale(0.7);
        visibility: hidden;
      }

      ${InsideContent} {
        opacity: 1;
        transform: scale(1);
        transition: 0.2s 0.1s;
        visibility: visible;
      }
    }
  }
`;

export const Styles = { Content, SupportUs, InsideContent, OutsideContent };
