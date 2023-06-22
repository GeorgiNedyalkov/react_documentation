export default function ThemeSwitch() {
  const { currentTheme, toggleCurrentTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() =>
        toggleCurrentTheme(currentTheme === "light" ? "dark" : "light")
      }
      className="p-5 border bg-white text-black"
    >
      Go {currentTheme === "light" ? "DARK MODE" : "LIGHT MODE"}
    </button>
  );
}
