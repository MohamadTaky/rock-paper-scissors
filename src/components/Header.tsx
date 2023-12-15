import LogoImage from "@/assets/images/logo-bonus.svg";
import { useGameContext } from "@/context/gameContext";

export default function Header() {
  const { score } = useGameContext();
  return (
    <header className="mx-auto mb-8 flex w-full max-w-lg justify-between rounded-md border-2 border-[hsl(217,16%,45%)] p-2 sm:text-xs">
      <img src={LogoImage} alt="logo" className="my-auto ml-4 h-14 w-14 sm:h-20 sm:w-20" />
      <div className="flex flex-col items-center justify-center rounded-md bg-white p-2 px-6 shadow-md">
        <span className="-mb-2 text-sm font-semibold text-score sm:text-lg">score</span>
        <span className="text-4xl font-bold text-dark sm:text-5xl">{score}</span>
      </div>
    </header>
  );
}
