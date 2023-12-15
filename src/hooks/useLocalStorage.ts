import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function useLocalStorage<T>(key: string, initialValue?: T) {
  const [state, setState] = useState<T>();
  useEffect(() => {
    if (localStorage.getItem(key) === null) setState(initialValue);
    else setState(localStorage.getItem(key) as T);
  }, []);
  useEffect(() => {
    localStorage.setItem(key, String(state));
  }, [state]);
  return [state, setState] as [T, Dispatch<SetStateAction<T>>];
}
