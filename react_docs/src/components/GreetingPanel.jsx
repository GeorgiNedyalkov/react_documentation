import { useState } from "react";

import LoginButton from "./LoginButton";
import AdminPanel from "./AdminPanel";
import LoginForm from "./LoginForm";

const GreetingPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const onLogin = () => setIsLoggedIn(!isLoggedIn);
  return (
    <div className="flex flex-col">
      {isLoggedIn ? <AdminPanel /> : <LoginForm />}

      <LoginButton onLogin={onLogin} isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default GreetingPanel;
