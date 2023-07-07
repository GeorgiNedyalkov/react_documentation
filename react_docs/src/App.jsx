import { useEffect, useState } from "react";

export default function App() {
  return <div className="m-10"></div>;
}

export function StatusBar() {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return <h1>{isOnline ? "✅ Success" : "❌ Offline"}</h1>;
}
