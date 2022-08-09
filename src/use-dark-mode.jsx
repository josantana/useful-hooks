import { useEffect } from "react";
import useMediaQuery from "./use-media-query";
import { useLocalStorage } from "./use-local-storage";

function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("useDarkMode");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const enabled = darkMode ?? prefersDarkMode;

  useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled);
  }, [enabled]);

  return [enabled, setDarkMode];
}

export default useDarkMode;
