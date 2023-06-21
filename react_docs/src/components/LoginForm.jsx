const LoginForm = () => {
  return (
    <form id="login-form" className="flex flex-col w-64 gap-2 h-32">
      <input
        className="rounded h-10 p-2"
        type="text"
        name="usernam"
        id="username"
        placeholder="Name"
      />
      <input
        className="rounded h-10 p-2"
        type="password"
        name="password"
        id="password"
        placeholder="Pass"
      />
    </form>
  );
};

export default LoginForm;
