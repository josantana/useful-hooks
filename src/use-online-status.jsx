import { useState } from "react";
import useEventListener from "./use-event-listener";

function useOnlineStatus() {
  // During SSR, the user is always online (fallback)
  const [online, setOnline] = useState(navigator ? navigator.onLine : true);

  useEventListener("online", () => setOnline(navigator.onLine));
  useEventListener("offline", () => setOnline(navigator.onLine));

  return online;
}

export default useOnlineStatus;
