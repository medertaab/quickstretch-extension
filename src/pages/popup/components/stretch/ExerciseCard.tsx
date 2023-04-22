import React, { useState } from "react";
import Sprite from "./Sprite";
import ExerciseContainer from "../../styles/ExerciseContainer.styled";
import StartButton from "./StartButton";
import { Timer } from "../../styles/Stretch.styled";

export default function ExerciseCard(props: any) {
  const {
    currentExercise,
    status,
    seconds,
    autoplay,
    speed,
    handleStart,
    isPaused,
  } = props;
  const [instructionsOn, setInstructionsOn] = useState(false);

  if (!currentExercise)
    return (
      <ExerciseContainer status={status}>
        <div className="main-content">
          <Sprite data={currentExercise} />
          <div className="status">
            <StartButton onClick={handleStart} />
          </div>
        </div>
      </ExerciseContainer>
    );

  return (
    <ExerciseContainer status={status}>
      <div className="main-content">
        <Sprite data={currentExercise} speed={speed} />
        {autoplay && (
          <div className="status">
            <Timer isPaused={isPaused} status={status} autoplay={autoplay}>
              {seconds}
            </Timer>
            <h4>{status === "break" && "Get ready!"}</h4>
            <h4>{seconds === currentExercise.duration && "Go!"}</h4>
          </div>
        )}

        {!autoplay && (
          <div className="status">
            <Timer isPaused={isPaused} status={status} autoplay={autoplay}>
              {seconds}
            </Timer>
            <h4>{seconds === currentExercise.duration && "Next exercise:"}</h4>
          </div>
        )}
      </div>

      <div className="exercise-info">
        <div className="title-container">
          <h3 className="title">{currentExercise.title}</h3>
          {!instructionsOn && (
            <svg
              className="instructions-button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              onClick={() => setInstructionsOn(true)}
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          )}
          {instructionsOn && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              onClick={() => setInstructionsOn(false)}
            >
              <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
            </svg>
          )}
        </div>

        {instructionsOn && (
          <ul>
            {currentExercise.instructions.map(
              (instruction: string, id: number) => {
                return <li key={id}>{instruction}</li>;
              }
            )}
          </ul>
        )}
      </div>
    </ExerciseContainer>
  );
}
