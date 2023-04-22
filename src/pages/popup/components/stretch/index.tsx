import React, { useEffect, useState, useRef } from "react";
import { ALL_STRETCHES } from "@src/data/ALL_STRETCHES";
import StartButton from "./StartButton";
import CompleteCard from "./CompleteCard";
import ExerciseCard from "./ExerciseCard";
import ControlButton from "./ControlButton";
import ToggleButton from "../ui/ToggleButton";
import {
  StretchPage,
  ProgressCircle,
  Timer,
  TextData,
} from "../../styles/Stretch.styled";
import { useAutoplay } from "../../hooks/AutoplayContext";
import usePreloadImages from "../../hooks/usePreloadImages";

export default function Stretch(props: any) {
  const { mode } = props;
  const { autoplay } = useAutoplay() as any;
  const preloadImages = usePreloadImages();
  const data = mode ? ALL_STRETCHES[mode] : ALL_STRETCHES.neck_stretch;
  const duration = data.exercises.reduce((acc: any, val: any) => {
    return (acc = acc + val.duration + 5);
  }, 0);

  const [currentExercise, setCurrentExercise] = useState<any>(null);
  const [seconds, setSeconds] = useState<number | null>(null);
  const [status, setStatus] = useState("off"); // on,off,break,pause
  const [isPaused, setIsPaused] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isLast, setIsLast] = useState(false);
  const [progress, setProgress] = useState<any>({});

  const timer = useRef<any>();
  const scrollRef = useRef<any>(null);

  // Start fresh
  useEffect(() => {
    clearProgress();
    preloadImages(data.exercises);
  }, []);

  // Scroll controls into view
  useEffect(() => {
    scrollRef.current?.scrollIntoView();
  }, [data, currentExercise]);

  useEffect(() => {
    if (data.exercises.indexOf(currentExercise) === data.exercises.length - 1) {
      setIsLast(true);
    }

    // When exercise ends
    if (seconds === 0 && status === "on") {
      // Tracking progress
      const index = data.exercises.indexOf(currentExercise);
      setProgress({ ...progress, [index]: true });

      // After each exercise
      if (isLast) {
        setIsComplete(true);
        setStatus("off");
        setCurrentExercise(null);
        handleTimer.stop();
      } else {
        if (!autoplay) {
          handleTimer.pause();
          setCurrentExercise((prev: any) => {
            return data.exercises[data.exercises.indexOf(prev) + 1];
          });
          setSeconds(currentExercise.duration);
        } else {
          takeBreak();
        }
      }
    }

    // When break ends
    if (seconds === 0 && status === "break") {
      setStatus("on");
      setSeconds(currentExercise.duration);
      handleTimer.start();
    }
  }, [status, seconds, progress, currentExercise, data, isLast]);

  // Start button
  function handleStart() {
    if (currentExercise) return;
    clearProgress();
    setIsLast(false);
    setIsComplete(false);
    setCurrentExercise(data.exercises[0]);

    if (autoplay) {
      setStatus("break");
      setSeconds(data.breakDuration);
      handleTimer.start();
    } else {
      setStatus("on");
      setSeconds(data.exercises[0].duration);
      setIsPaused(true);
    }
  }

  // Pause button
  function handlePause() {
    handleTimer.pause();
  }

  // Resume button
  function handleResume() {
    if (!autoplay) {
      setStatus("on");
    }
    setIsPaused(false);
    handleTimer.start();
  }

  // Skip button
  function handleSkip() {
    if (isLast) return;
    if (status === "off") return;
    setIsPaused(false);
    clearInterval(timer.current);
    timer.current = 0;
    setCurrentExercise((prev: any) => {
      return data.exercises[data.exercises.indexOf(prev) + 1];
    });
    setStatus("break");
    if (autoplay) {
      setSeconds(data.breakDuration);
      handleTimer.start();
    } else {
      setSeconds(currentExercise.duration);
      handleTimer.pause();
    }
  }

  // Stop button
  function handleStop() {
    setStatus("off");
    setCurrentExercise(null);
    handleTimer.stop();
    clearProgress();
  }

  // Change to break & set next exercise
  function takeBreak() {
    setStatus("break");
    setCurrentExercise((prev: any) => {
      return data.exercises[data.exercises.indexOf(prev) + 1];
    });
    setSeconds(data.breakDuration);
    handleTimer.start();
  }

  function clearProgress() {
    setProgress(
      data.exercises.reduce((acc: any, val: any, index: any) => {
        return { ...acc, [index]: false };
      }, {})
    );
  }

  // Timer controller
  const handleTimer = {
    start: function () {
      if (!timer.current) {
        // Prevent stacking intervals
        timer.current = setInterval(() => {
          setSeconds((prev: any) => prev - 1);
        }, 1000);
      }
    },
    pause: function () {
      if (status === "off") return;
      setIsPaused(true);
      clearInterval(timer.current);
      timer.current = 0;
    },
    stop: function () {
      setIsPaused(false);
      setIsLast(false);
      clearInterval(timer.current);
      timer.current = 0;
      setSeconds(null);
    },
  };

  return (
    <StretchPage>
      <ExerciseCard
        currentExercise={currentExercise}
        status={status}
        seconds={seconds}
        autoplay={autoplay}
        speed={data.speed}
        handleStart={handleStart}
        isPaused={isPaused}
      />

      <div className="progress-circles">
        {Object.keys(progress).map((key) => {
          return <ProgressCircle complete={progress[key]} key={key} />;
        })}
      </div>

      <ul ref={scrollRef} className="control-buttons-container">
        <ControlButton title="Stop" onClick={handleStop} status={status} />
        {isPaused && autoplay && (
          <ControlButton title="Resume" onClick={handleResume} />
        )}
        {isPaused && !autoplay && (
          <ControlButton title="Start" onClick={handleResume} />
        )}
        {!isPaused && (
          <ControlButton title="Pause" onClick={handlePause} status={status} />
        )}
        <ControlButton
          title="Skip"
          onClick={handleSkip}
          isLast={isLast}
          status={status}
        />
      </ul>

      {isComplete && (
        <CompleteCard
          mode={mode}
          title={data.title}
          setIsComplete={setIsComplete}
          progress={progress}
        />
      )}
    </StretchPage>
  );
}
