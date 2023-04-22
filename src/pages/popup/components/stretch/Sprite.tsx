import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Sprite(props: any) {
  const { data, speed } = props;
  const [index, setIndex] = useState(0);
  const sprite = data?.images[index];

  let spriteRef: any = useRef(null);

  useEffect(() => {
    if (data) {
      spriteRef = setTimeout(() => {
        if (index >= data.images.length - 1) {
          setIndex(0);
        } else {
          setIndex((prev) => prev + 1);
        }
      }, speed);
    } else {
      clearInterval(spriteRef);
    }
  }, [data, index]);

  return (
    <SpriteContainer>
      {!sprite && (
        <SpriteImage
          src="/neck_stretch/leftandright/1.png"
          alt="Execising bunny idle"
        ></SpriteImage>
      )}
      {sprite && (
        <SpriteImage
          src={sprite}
          alt={`${data.title} demonstration`}
        ></SpriteImage>
      )}
    </SpriteContainer>
  );
}

const SpriteContainer = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
`;

const SpriteImage = styled.img`
  height: 9rem;
  margin: 0 auto;
`;
