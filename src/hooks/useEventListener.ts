import { useEffect } from "react";

export default function useEventListener<K extends keyof DocumentEventMap>(
  type: K,
  handler: (this: Document, event: DocumentEventMap[K]) => any,
) {
  useEffect(() => {
    document.addEventListener(type, handler);
    return () => document.removeEventListener(type, handler);
  }, [type]);
}
