import GameItem, { GameItemProps } from "@/components/game/GameItem";
import { motion } from "framer-motion";

type GameResultItemProps = GameItemProps & {
  isWinner?: boolean;
};

export default function GameResultItem({ isWinner, ...props }: GameResultItemProps) {
  return (
    <div className="relative isolate w-fit rounded-full bg-black bg-opacity-25">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: props.type ? 1 : 0 }}>
        <GameItem {...props} />
      </motion.div>
      {isWinner && (
        <motion.div
          initial={{ transform: "translate(-50%,-50%) scale(0%)" }}
          animate={{ transform: "translate(-50%,-50%) scale(100%)" }}
          className="pointer-events-none absolute left-1/2 top-1/2 -z-50 h-72
          w-72
          rounded-full
          bg-[radial-gradient(rgb(255_255_255/15%),rgb(255_255_255/15%)_40%,rgb(255_255_255/10%)_40%,rgb(255_255_255/10%)_55%,rgb(255_255_255/5%)_55%)]
          sm:h-96
          sm:w-96"
        />
      )}
    </div>
  );
}
