import GameMenu from "@/components/game/GameMenu";
import GameResult from "@/components/game/GameResult";
import Header from "@/components/Header";
import Rules from "@/components/Rules";
import { useGameContext } from "@/context/gameContext";
function App() {
  const { playerState } = useGameContext();
  return (
    <>
      <Header />
      {playerState ? <GameResult /> : <GameMenu />}
      <Rules />
    </>
  );
}

export default App;
