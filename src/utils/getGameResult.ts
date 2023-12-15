import GameState from "@/types/GameState";

const winMap = {
  rock: ["lizard", "scissors"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
};

export default function getGameResult(playerState: NonNullable<GameState>, computerState: NonNullable<GameState>) {
  if (playerState === computerState) return "draw";
  if (winMap[playerState].some((state) => state === computerState)) return "win";
  return "lose";
}
