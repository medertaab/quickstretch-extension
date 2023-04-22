import React from "react";
import styled from "styled-components";

export default function Header(props: any) {
  const { mode, setMode } = props;

  function title() {
    if (!mode || mode === "breathing" || mode === "settings") {
      return "QuickStretch";
    }
    return `${mode.split("_stretch")[0]}Stretch`;
  }

  return (
    <HeaderStyled>
      <button type="button" className="home-button" onClick={() => setMode("")}>
        {mode && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
          </svg>
        )}
      </button>

      <div className="logo" onClick={() => setMode("")}>
        <img src="/logo.png" />
        <h1>{title()}</h1>
      </div>

      <button
        type="button"
        className="settings-button"
        onClick={() => setMode("settings")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
        </svg>
      </button>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  padding: 0 0.2rem;

  button {
    width: fit-content;
  }

  svg {
    height: 1.1rem;
    fill: var(--default-black);
    opacity: 60%;
    transition: 0.125s ease-in-out;
  }

  svg:hover {
    opacity: 100%;
  }

  .logo {
    flex: 1fr;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 1.5rem;
    margin: 0.7rem 0 0 0;
    padding: 0;
  }

  h1:first-letter {
    text-transform: uppercase;
  }

  img {
    height: 2rem;
    animation: shake-infinite 3s linear 1s infinite;
  }

  img:hover {
    animation: shake 0.5s linear;
  }

  @keyframes shake-infinite {
    0% {
      transform: rotate(0);
    }
    4% {
      transform: rotate(-10deg);
    }
    8% {
      transform: rotate(10deg);
    }
    10% {
      transform: rotate(-10deg);
    }
    12% {
      transform: rotate(0);
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(0);
    }
    40% {
      transform: rotate(-10deg);
    }
    70% {
      transform: rotate(10deg);
    }
    90% {
      transform: rotate(-10deg);
    }
    99% {
      transform: rotate(0);
    }
  }
`;
