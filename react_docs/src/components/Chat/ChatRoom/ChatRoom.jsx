import { useState } from "react";

import ChatRoom from "../Chat";

export default function Chat() {
  const [roomId, setRoomId] = useState("general");

  return (
    <>
      <label>
        Choose the chat room:
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="music">music</option>
          <option value="travel">travel</option>
        </select>
      </label>
      <ChatRoom roomId={roomId} />
    </>
  );
}
