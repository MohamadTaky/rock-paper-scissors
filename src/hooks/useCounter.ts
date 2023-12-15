import { useState } from "react";

export default function useCounter(initialState = 0) {
  const [counter, setCounter] = useState(initialState);
  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);
  const reset = () => setCounter(0);
  return { counter, setCounter, reset, increment, decrement };
}
