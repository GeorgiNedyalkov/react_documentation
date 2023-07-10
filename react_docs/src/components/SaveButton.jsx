import { useOnlineStatus } from "../hooks/useOnlineStatus";

export default function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSave() {
    console.log("Progress saved ✅");
  }

  return (
    <button
      className="border p-1 m-1"
      onClick={handleSave}
      disabled={!isOnline}
    >
      {isOnline ? "save progress" : "reconnecting..."}
    </button>
  );
}
