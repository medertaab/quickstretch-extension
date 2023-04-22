import React, { useState } from "react";
import styled from "styled-components";
import ToggleButton from "../ui/ToggleButton";
import { useTheme } from "../../hooks/ThemeContext";
import { useAutoplay } from "../../hooks/AutoplayContext";

export default function Settings() {
  const { theme, toggleTheme } = useTheme() as any;
  const { autoplay, toggleAutoplay } = useAutoplay() as any;
  const [timer, setTimer] = useState("0");
  const [saveText, setSaveText] = useState("Save");

  // Make current streaks object
  const currentStreaks = Object.keys(localStorage).reduce(
    (acc: any, val: any) => {
      const keys = Object.keys(localStorage);
      if (val.includes("streak") && !val.includes("max")) {
        const keyname = val.split("_")[0].toLowerCase();
        acc[keyname] = localStorage.getItem(val);
      }
      return acc;
    },
    {}
  );

  function saveTimer() {
    const currentTime = new Date();
    localStorage.setItem("timer-length", String(timer));
    localStorage.setItem("timer-set", currentTime.toLocaleString());
    setSaveText("✓");
    setTimeout(() => {
      setSaveText("Save");
    }, 1000);
  }

  return (
    <>
      <SettingsStyled>
        <ToggleButton toggle={toggleTheme} on={theme === "dark"}>
          Dark mode:
        </ToggleButton>
        <ToggleButton toggle={toggleAutoplay} on={autoplay}>
          Autoplay:
        </ToggleButton>

        <h3>Current streaks:</h3>
        <ul className="streaks">
          {Object.keys(currentStreaks).length < 1 &&
            "Complete an exercise to get a streak going"}
          {Object.keys(currentStreaks).map((key) => {
            return (
              <li key={key}>
                <span>{key} stretch: </span>
                <span>
                  {currentStreaks[key]}{" "}
                  {currentStreaks[key] === "1" ? "day" : "days"}
                </span>
              </li>
            );
          })}
        </ul>
      </SettingsStyled>
      <span className="copyright">© MT</span>
    </>
  );
}

const SettingsStyled = styled.div`
  min-height: 10rem;
  min-width: 15rem;
  background-color: var(--accent-transparent);
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;

  button {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 1.5rem;
    padding: 0.5rem;
    color: var(--default-black);

    svg {
      fill: var(--default-black);
    }

    &:hover {
      cursor: pointer;
    }
  }

  h3 {
    margin-top: 1rem;
  }

  .streaks {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: var(--default-black);

    li {
      display: flex;
      justify-content: space-between;
      width: 10rem;
    }

    li *::first-letter {
      text-transform: uppercase;
    }
  }
`;
