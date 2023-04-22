import React from "react";
import ModeButton from "./ModeButton";
import styled from "styled-components";

export default function Main(props: any) {
  const { setMode } = props;

  return (
    <ModeList>
      <ModeButton title="Neck stretch" mode="neck_stretch" setMode={setMode} />
      <ModeButton title="Hand stretch" mode="hand_stretch" setMode={setMode} />
      <ModeButton
        title="Shoulder stretch"
        mode="shoulder_stretch"
        setMode={setMode}
      />
      <ModeButton title="Breathing" mode="breathing" setMode={setMode} />
    </ModeList>
  );
}

const ModeList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  width: 100;
  justify-content: center;
`;
