import PentagonIcon from "@/assets/images/bg-pentagon.svg";
import ClickableGameItem from "@/components/game/ClickableGameItem";

export default function GameMenu() {
  return (
    <div className="relative m-auto w-44 sm:w-72">
      <ClickableGameItem type="scissors" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <ClickableGameItem type="spock" className="absolute left-[5%] top-[40%] -translate-x-1/2 -translate-y-1/2" />
      <ClickableGameItem type="paper" className="absolute right-[5%] top-[40%] -translate-y-1/2 translate-x-1/2" />
      <ClickableGameItem type="lizard" className="absolute left-[20%] top-full -translate-x-1/2 -translate-y-1/2" />
      <ClickableGameItem type="rock" className="absolute right-[20%] top-full -translate-y-1/2 translate-x-1/2" />
      <img src={PentagonIcon} alt="pentagon-icon" />
    </div>
  );
}
