import { useState } from "react";
import ChatRoom from "./ChatRoom";

export default function ChatApp() {
  const [roomId, setRoomId] = useState("general");
  return (
    <>
      <label>
        Choose chat room:
        <select
          className="ml-2 border"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="music">music</option>
          <option value="sports">sports</option>
        </select>
      </label>
      <hr className="my-2" />
      <ChatRoom roomId={roomId} />
    </>
  );
}
