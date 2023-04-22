import styled from "styled-components";

const ExerciseContainer = styled.div<{ status: string }>`
  display: flex;
  align-items: center;
  max-width: 30rem;
  width: 100%;
  height: fit-content;
  background-color: var(--accent-transparent);
  border-radius: 1rem;
  padding: 0.5rem;
  position: relative;

  .main-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    margin: 0 auto;
  }

  .exercise-info {
    width: 100%;
    flex: 1;
  }

  .status {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    top: 6.5rem;

    h4 {
      position: absolute;
      margin-right: 1rem;
      bottom: 1.5rem;
      animation: ${(props) =>
        props.status === "break" ? "glow 1s ease-in-out infinite" : "none"};
    }
  }

  h3 {
    font-size: 1.1rem;
    margin: 0.5rem 0;
  }

  .title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;

    svg {
      position: absolute;
      right: 0;
      height: 1.1rem;
      fill: var(--default-black);
      cursor: pointer;
    }
  }

  ul {
    padding: 0;
  }

  li {
    text-align: left;
    font-size: 0.7rem;
    margin-top: 0.7rem;
    list-style: none;
    animation: ${(props) =>
      props.status === "break"
        ? "text-shimmer 1s ease-in-out infinite"
        : "none"};
  }

  @keyframes glow {
    0% {
      color: var(--default-black);
    }
    50% {
      color: green;
    }
    100% {
      color: var(--default-black);
    }
  }

  @keyframes text-shimmer {
    0% {
      opacity: 100%;
    }
    50% {
      opacity: 50%;
    }
    100% {
      opacity: 100%;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export default ExerciseContainer;
