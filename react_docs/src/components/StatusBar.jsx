import { useOnlineStatus } from "./hooks/useOnlineStatus";

function StatusBar() {
  const isOnline = useOnlineStatus();

  return <h1>{isOnline ? "✅ online" : "❌ disconnected"}</h1>;
}
