import GameState from "@/types/GameState";

const states = ["rock", "paper", "scissors", "lizard", "spock"];

export default function getRandomState(): GameState {
  return states[Math.floor(Math.random() * states.length)] as GameState;
}
