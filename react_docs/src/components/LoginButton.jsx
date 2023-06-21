const LoginButton = ({ onLogin, isLoggedIn }) => {
  return (
    <button
      className="m-4 text-white bg-sky-500 p-2 rounded w-32"
      onClick={onLogin}
    >
      Log {isLoggedIn ? "in" : "out"}
    </button>
  );
};

export default LoginButton;
