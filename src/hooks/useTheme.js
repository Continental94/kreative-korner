import { useEffect, useState } from "react";
const THEME_KEY = "kreative-korner-theme";
function getInitialTheme() {
  if (typeof window > "u") return "light";
  let stored = window.localStorage.getItem(THEME_KEY);
  return stored === "light" || stored === "dark"
    ? stored
    : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
}
export default function useTheme() {
  let [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    (document.documentElement.setAttribute("data-theme", theme),
      window.localStorage.setItem(THEME_KEY, theme));
  }, [theme]);
  function toggleTheme() {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }
  return {
    theme,
    toggleTheme,
  };
}
