import React, { useEffect, useState } from "react";
import { duration } from "@src/data/BREATHING";
import styled from "styled-components";

type Mode = {
  in: number;
  hold: number;
  out: number;
  rest: number;
};

export default function Instructions(props: any) {
  const { status } = props;
  const [fadeout, setFadeout] = useState(false);

  useEffect(() => {
    if (status.mode === "out") return;
    setFadeout(false);
    const modeDuration = duration[status.mode as keyof Mode];
    const timeout = setTimeout(() => {
      setFadeout(true);
    }, modeDuration - 500);
    return () => clearTimeout(timeout);
  }, [status]);

  return (
    <InstructionsStyled
      className={`${status.mode !== "rest" && "fade-in"} ${
        fadeout && "fade-out"
      }`}
    >
      {status.text}
    </InstructionsStyled>
  );
}

const InstructionsStyled = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
`;
