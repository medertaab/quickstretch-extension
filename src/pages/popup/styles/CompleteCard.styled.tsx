import styled from "styled-components";

const CompleteCardStyled = styled.div`
  position: absolute;
  z-index: 5;
  inset: 0;
  height: 90%;
  width: 90%;
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--default-light);
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 4px 1.2rem var(--accent);
  box-sizing: border-box;
  flex-direction: column;
  margin: 0 auto;

  h3 {
    margin: 0;
  }

  .close-button {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 1.2rem;
    padding: 0.5rem;

    &:hover {
      cursor: pointer;
    }
  }

  .notice {
    font-size: 0.8rem;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 15rem;
    margin: 1rem auto;

    * {
      display: flex;
      flex-direction: column;
    }

    .stats-streak {
      font-size: 0.7rem;
    }

    .stats-number {
      font-size: 2rem;
    }
  }

  .share-button {
    width: 12rem;
    height: 2.5rem;
    border-radius: 1.25rem;
    background-color: var(--accent);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    margin: 1rem auto 0 auto;
    transition: 150ms ease-in-out;

    &:hover {
      opacity: 80%;
      cursor: pointer;
    }

    svg {
      height: 1rem;
      margin-right: 0.25rem;
    }
  }
`;

export default CompleteCardStyled;
