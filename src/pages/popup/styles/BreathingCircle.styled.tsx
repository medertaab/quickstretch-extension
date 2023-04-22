import styled from "styled-components";

export const BreathingCircleStyled = styled.div`
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  margin: 0 auto;
  margin-top: 0.5rem;

  .sprite {
    z-index: 2;
    position: absolute;
    height: 9rem;
  }

  .topCircle {
    height: 0%;
    aspect-ratio: 1;
    background-color: white;
    border-radius: 50%;
    animation: circle 10s infinite ease-in-out;
    transition: background-color 0.1s linear;
  }

  .topCircle.in {
    height: 180px;
    background-color: rgba(21, 219, 219, 0.765);
    transition: height 4.5s, background-color 4.5s linear;
  }

  .topCircle.hold {
    height: 180px;
    background-color: rgba(21, 219, 219, 0.765);
  }

  .topCircle.out {
    height: 0%;
    background-color: white;
    transition: height 5s, background-color 5s linear;
  }

  .topCircle.rest {
    background-color: white;
    height: 0%;
  }

  .bottomCircle {
    position: absolute;
    aspect-ratio: 1/1;
    height: 180px;
    background-color: rgba(255, 255, 255, 0.368);
    border-radius: 50%;
    z-index: -0.5;
    border: 3px solid rgba(21, 219, 219, 0.765);
    box-sizing: border-box;
  }
`;
