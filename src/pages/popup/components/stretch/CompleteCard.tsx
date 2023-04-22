import React, { useState } from "react";
import CompleteCardStyled from "../../styles/CompleteCard.styled";

export default function CompleteCard(props: any) {
  const { title, setIsComplete, progress, mode } = props;

  function handleStreak(progress: any) {
    const isFullyCompleted = Object.values(progress).every(
      (value) => value === true
    );

    const today = new Date().toLocaleDateString();
    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterday = yesterdayDate.toLocaleDateString();

    const latestDate = localStorage.getItem(`${mode}-latest`);
    const previousDate = localStorage.getItem(`${mode}-previous`);

    if (!isFullyCompleted) {
      // If user previously completed the set today or yesterday
      if (latestDate && latestDate !== today && latestDate !== yesterday) {
        localStorage.setItem(`${mode}-streak`, "0");
      }
      return;
    }

    // If user completed a set, but already completed before today
    if (latestDate === today) {
      return;
    }

    // If last completed set was yesterday
    if (latestDate === yesterday || !previousDate) {
      const oldStreak = localStorage.getItem(`${mode}-streak`);
      const newStreak = Number(oldStreak) + 1;
      localStorage.setItem(`${mode}-streak`, String(newStreak));

      const maxStreak = Number(localStorage.getItem(`${mode}-maxstreak`));
      if (newStreak > maxStreak) {
        localStorage.setItem(`${mode}-maxstreak`, String(newStreak));
      }
      // If last completed set was not yesterday - break streak
    } else {
      localStorage.setItem(`${mode}-streak`, "1");
    }

    // Update data for future reference
    localStorage.setItem(`${mode}-previous`, latestDate || "");
    localStorage.setItem(`${mode}-latest`, today);
  }

  handleStreak(progress);

  return (
    <CompleteCardStyled className="fade-in">
      <button
        className="close-button"
        type="button"
        onClick={() => setIsComplete(false)}
      >
        ❌
      </button>

      <h3>Nice job!</h3>
      <p>
        You completed today&apos;s <strong>{title}</strong> set
      </p>

      <div className="stats-grid">
        <div>
          <span className="stats-number">
            {localStorage.getItem(`${mode}-streak`)}
          </span>
          <span className="stats-streak">Current streak</span>
        </div>
        <div>
          <span className="stats-number">
            {localStorage.getItem(`${mode}-maxstreak`)}
          </span>
          <span className="stats-streak">Longest streak</span>
        </div>
      </div>
    </CompleteCardStyled>
  );
}
