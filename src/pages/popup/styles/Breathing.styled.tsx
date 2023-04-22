import styled from "styled-components";

export const BreathingExercise = styled.div`
  box-sizing: border-box;
  padding: 2rem;
  max-width: 800px;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  background-color: var(--default-light-transparent);
  border-radius: 1rem;
  cursor: default;

  .button-back {
    left: 0;
    margin-left: 1rem;
    position: absolute;

    img {
      height: 1.5rem;
      width: 1.5rem;
    }
  }

  h2 {
    font-size: 1.7rem;
    font-weight: 700;
  }

  .exercise-details {
    max-width: 80%;
    margin-top: 0.1rem;
    font-size: 0.7rem;
    opacity: 80%;
    font-style: italic;
  }
`;
