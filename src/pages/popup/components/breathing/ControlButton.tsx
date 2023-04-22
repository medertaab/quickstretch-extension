import React from "react";
import styled from "styled-components";

export default function ControlButton(props: any) {
  const { status, startBreathing, stopBreathing } = props;

  if (!status.on)
    return (
      <>
        <PromptStyled>Press start to begin</PromptStyled>
        <ControlButtonStyled type="button" onClick={startBreathing}>
          Start
        </ControlButtonStyled>
      </>
    );

  if (status.on)
    return (
      <ControlButtonStyled type="button" onClick={stopBreathing}>
        Stop
      </ControlButtonStyled>
    );

  return <></>;
}

const ControlButtonStyled = styled.button`
  height: 2rem;
  width: 6rem;
  margin-top: 0.8rem;
  min-width: fit-content;
  border-radius: 1rem;
  transition: 0.1s ease-in-out;
  background-color: var(--accent);
  cursor: pointer;

  &:hover {
    background-color: var(--accent-transparent);
  }
`;

const PromptStyled = styled.p`
  font-size: 0.9rem;
`;
