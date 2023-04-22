import React from "react";
import styled from "styled-components";
import { ALL_STRETCHES } from "@src/data/ALL_STRETCHES";

export default function ModeButton(props: any) {
  const { title, mode, setMode } = props;

  const duration = ALL_STRETCHES[mode]?.exercises.reduce((acc, val) => {
    return (acc = acc + val.duration + 5);
  }, 0);
  const durationRounded = Math.round((duration / 60) * 2) / 2;

  return (
    <ModeButtonStyled onClick={() => setMode(mode)}>
      <div className="images">
        <img src={`/card_images/${mode}.png`} alt={`${mode}`} />
        <img
          src={`/card_images/${mode}_under.png`}
          className="under-image"
          alt={`${mode}-highlighted`}
        />
      </div>
      <h2>{title}</h2>
      {mode !== "breathing" && <p>{durationRounded} min</p>}
    </ModeButtonStyled>
  );
}

const ModeButtonStyled = styled.li`
  list-style: none;
  width: 9rem;
  border: 1px solid var(--default-black);
  background-color: #ebe9e5d8;
  box-sizing: border-box;
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.1s ease-in;
  position: relative;
  overflow: hidden;

  a {
    width: 100%;
    height: 100%;
  }

  h2 {
    font-size: 1rem;
    font-weight: 500;
    color: #353535;
  }

  p {
    font-size: 0.8rem;
    color: #353535;
  }

  .images {
    width: min-content;
    position: relative;
    margin: 0.5rem auto 0 auto;
  }

  img {
    height: 3.5rem;
    transition: 0.2s ease-in-out;
  }

  .under-image {
    position: absolute;
    left: 0;
    opacity: 0%;
    transition: 0.15s ease-in-out;
    z-index: -1;
  }

  &:hover {
    .under-image {
      opacity: 100%;
      margin: 0 auto;
    }
`;
