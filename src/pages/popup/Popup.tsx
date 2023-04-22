import React, { useState } from "react";
import { AutoplayProvider } from "./hooks/AutoplayContext";
import { ThemeProvider } from "./hooks/ThemeContext";
import { AppStyled } from "./styles/App.styled";
import Header from "./components/Header";
import Main from "./components/main";
import Breathing from "./components/breathing";
import Stretch from "./components/stretch";
import Settings from "./components/settings";
import GlobalStyles from "./styles/GlobalStyles";

export default function Popup() {
  const [mode, setMode] = useState("");

  return (
    <ThemeProvider>
      <AutoplayProvider>
        <GlobalStyles />
        <AppStyled id="app">
          <Header setMode={setMode} mode={mode} />

          {!mode && <Main setMode={setMode} />}
          {mode === "breathing" && <Breathing />}
          {mode === "settings" && <Settings />}
          {mode !== "" && mode !== "breathing" && mode !== "settings" && (
            <Stretch mode={mode} />
          )}
        </AppStyled>
      </AutoplayProvider>
    </ThemeProvider>
  );
}
