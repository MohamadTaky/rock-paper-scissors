import useLocalStorage from "@/hooks/useLocalStorage";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

export type SelectionState = null | "rock" | "paper" | "scissors" | "lizard" | "spock";

type GameContextType = {
  playerState: SelectionState;
  setPlayerState: Dispatch<SetStateAction<SelectionState>>;
  computerState: SelectionState;
  setComputerState: Dispatch<SetStateAction<SelectionState>>;
  score: number;
  result: null | "draw" | "win" | "lose";
  setResult: Dispatch<SetStateAction<GameContextType["result"]>>;
  incrementScore: () => void;
  resetScore: () => void;
  reset: () => void;
};

const GameContext = createContext<GameContextType>({
  playerState: null,
  setPlayerState: () => {},
  computerState: null,
  setComputerState: () => {},
  score: 0,
  result: null,
  setResult: () => {},
  incrementScore: () => {},
  resetScore: () => {},
  reset: () => {},
});

export function GameContextProvider({ children }: { children?: ReactNode }) {
  const [playerState, setPlayerState] = useState<SelectionState>(null);
  const [computerState, setComputerState] = useState<SelectionState>(null);
  const [result, setResult] = useState<GameContextType["result"]>(null);
  const [score, setScore] = useLocalStorage<number>("score", 0);
  const reset = () => {
    setPlayerState(null);
    setComputerState(null);
    setResult(null);
  };
  return (
    <GameContext.Provider
      value={{
        playerState,
        setPlayerState,
        computerState,
        setComputerState,
        result,
        setResult,
        score,
        incrementScore: () => {
          setScore((prev) => prev + 1);
        },
        reset,
        resetScore: () => setScore(0),
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGameContext() {
  return useContext(GameContext);
}
