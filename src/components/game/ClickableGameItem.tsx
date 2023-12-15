import { useGameContext } from "@/context/gameContext";
import GameState from "@/types/GameState";
import getGameResult from "@/utils/getGameResult";
import getRandomState from "@/utils/getRandomState";
import GameItem, { GameItemProps } from "./GameItem";
import Button from "@/components/common/Button";
import cn from "@/utils/cn";

export default function ClickableGameItem({ className, ...props }: GameItemProps) {
  const { setPlayerState, setComputerState, setResult, incrementScore, resetScore } = useGameContext();
  const handleClick = () => {
    const computerState = getRandomState();
    const playerState = props.type;
    const result = getGameResult(playerState as NonNullable<GameState>, computerState as NonNullable<GameState>);
    setPlayerState(playerState);
    setTimeout(() => {
      setComputerState(computerState);
      setResult(result);
      if (result === "win") incrementScore();
      else if (result === "lose") resetScore();
    }, 3000);
  };
  return (
    <Button variant="ghost" onClick={handleClick} className={cn("group aspect-square rounded-full p-0", className)}>
      <GameItem {...props} className="transition group-hover:bg-slate-200" />
    </Button>
  );
}
