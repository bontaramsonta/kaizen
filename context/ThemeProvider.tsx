"use client";

import React from "react";

function getDarkMode() {
  // get dark mode from local storage
  let mode = localStorage.getItem("mode");
  if (!mode) {
    // get system dark mode
    mode = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return mode === "dark" ? "dark" : "light";
}

const ThemeContext = React.createContext<{
  mode: "dark" | "light";
  toggleDarkMode: () => void;
}>({ mode: "light", toggleDarkMode: () => {} });

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<"dark" | "light">(getDarkMode);

  React.useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  function toggleDarkMode() {
    const next = mode === "dark" ? "light" : "dark";
    localStorage.setItem("mode", next);
    if (next === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    setMode(next);
  }

  const value = React.useMemo(() => ({ mode, toggleDarkMode }), [mode]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
export { ThemeContext };
export default ThemeProvider;
