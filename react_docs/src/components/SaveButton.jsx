import { useOnlineStatus } from "../hooks/useOnlineStatus";

export default function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log("progress saved");
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? "Save progress" : "Reconnecting"}
    </button>
  );
}
