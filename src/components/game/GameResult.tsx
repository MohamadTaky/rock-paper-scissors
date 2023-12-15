import Button from "@/components/common/Button";
import GameResultItem from "@/components/game/GameResultItem";
import { useGameContext } from "@/context/gameContext";
import { motion } from "framer-motion";

export default function GameResult() {
  const { playerState, computerState, result, reset } = useGameContext();
  return (
    <>
      <div className="grid flex-1 grid-cols-[auto_auto] place-content-center items-center gap-16 text-center text-sm tracking-wider md:grid-cols-[auto_auto_auto]">
        <div className="flex flex-col-reverse items-center gap-4 md:flex-col">
          <p>you picked</p>
          <GameResultItem isWinner={result === "win"} size="lg" type={playerState} />
        </div>
        {
          <motion.div
            className="min-w-[220px] max-md:col-span-full max-md:row-start-2 max-md:mx-auto"
            animate={result ? { opacity: 1, visibility: "visible" } : { opacity: 0, visibility: "hidden" }}
          >
            <h2 className="m-2 text-5xl tracking-wider">{result === "draw" ? "Draw" : `You ${result}`}</h2>
            <Button className="w-full uppercase" onClick={reset}>
              Play again
            </Button>
          </motion.div>
        }
        <div className="flex flex-col-reverse items-center gap-4 md:flex-col">
          <p>the house picked</p>
          <GameResultItem isWinner={result === "lose"} size="lg" type={computerState} />
        </div>
      </div>
    </>
  );
}
