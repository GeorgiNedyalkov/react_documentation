import { useEffect } from "react";

import { createConnection } from "../../../utils/connection";

export default function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();

    return () => connection.disconnect();
  }, [roomId]);

  return <h1 className="text-2xl">Wecolme to the {roomId} room!</h1>;
}
