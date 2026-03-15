import React from 'react';
import styled from 'styled-components';

const Button = ({ custum }: { custum: string }) => {
  return (
    <StyledWrapper>
      <button className="bubbles">
        <span className="text">{custum}</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .bubbles {
    --c1: #212121;
    --c2: #8685ef;
    --size-letter: 32px;
    padding: 8px 38px;
    font-size: var(--size-letter);

    background-color: transparent;
    border: #bd44ff solid 4px;
    border-radius: 0.2em;
    cursor: pointer;

    overflow: hidden;
    position: relative;
    transition: 300ms cubic-bezier(0.83, 0, 0.17, 1);
  }

  .bubbles > .text {
    font-weight: 600;
    color: #bd44ff;
    position: relative;
    z-index: 1;
    transition: color 700ms cubic-bezier(0.83, 0, 0.17, 1);
  }

  .bubbles::before {
    top: 0;
    left: 0;
  }

  .bubbles::after {
    top: 100%;
    left: 100%;
  }

  .bubbles::before,
  .bubbles::after {
    content: '';
    width: 150%;
    aspect-ratio: 1/1;
    scale: 0;
    transition: 800ms cubic-bezier(0.76, 0, 0.24, 1);

    background-color: #bd44ff;
    border-radius: 50%;

    position: absolute;
    translate: -50% -50%;
  }

  .bubbles:hover {
    & > span {
      color: white;
    }
    &::before,
    &::after {
      scale: 1;
    }
  }

  .bubbles:active {
    scale: 0.98;
    filter: brightness(0.9);
  }
`;

export default Button;
