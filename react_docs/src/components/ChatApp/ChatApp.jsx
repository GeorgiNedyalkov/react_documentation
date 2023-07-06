import { useEffect, useState } from "react";
import { createConnection } from "../../utils/connection";

const serverUrl = "http://127.0.0.1:5173/";

export function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return (
    <h1 className="text-2xl font-semibold">Welcome to the {roomId} room!</h1>
  );
}

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
