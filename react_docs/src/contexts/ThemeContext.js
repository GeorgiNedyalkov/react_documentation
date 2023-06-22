import { createContext } from "react";

const defaultValue = {
  currentTheme: "light",
  toggleCurrentTheme: () => {},
};

export const ThemeContext = createContext(defaultValue);

export function ThemeContextWrapper({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  function toggleCurrentTheme(newTheme) {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, toggleCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
