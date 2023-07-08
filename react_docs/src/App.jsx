import SaveButton from "./components/SaveButton";
import { useOnlineStatus } from "./hooks/useOnlineStatus";

export default function App() {
  return (
    <div className="m-10">
      <SaveButton />

      <StatusBar />
    </div>
  );
}

export function StatusBar() {
  const isOnline = useOnlineStatus();

  return <h1>{isOnline ? "✅ Success" : "❌ Offline"}</h1>;
}
