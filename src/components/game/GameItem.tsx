import LizardIcon from "@/assets/images/icon-lizard.svg";
import PaperIcon from "@/assets/images/icon-paper.svg";
import RockIcon from "@/assets/images/icon-rock.svg";
import ScissorsIcon from "@/assets/images/icon-scissors.svg";
import SpockIcon from "@/assets/images/icon-spock.svg";
import { SelectionState } from "@/context/gameContext";
import cn from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const borderVariants = cva("w-fit rounded-full bg-gradient-to-b", {
  variants: {
    variant: {
      rock: "from-[hsl(349,71%,52%)] to-[hsl(349,70%,56%)] shadow-[inset_0px_-1.5px_0px_1px_#9C1835]",
      paper: "from-[hsl(230,89%,62%)] to-[hsl(230,89%,65%)] shadow-[inset_0px_-1.5px_0px_1px_#2A47BF]",
      scissors: "from-[hsl(39,89%,49%)] to-[hsl(40,84%,53%)] shadow-[inset_0px_-1.5px_0px_1px_#C26D18]",
      lizard: "from-[hsl(261,73%,60%)] to-[hsl(261,72%,63%)] shadow-[inset_0px_-1.5px_0px_1px_#6138AB]",
      spock: "from-[hsl(189,59%,53%)] to-[hsl(189,58%,57%)] shadow-[inset_0px_-1.5px_0px_1px_#2D94AF]",
    },
    size: {
      md: "p-2.5",
      lg: "p-3",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const containerVariants = cva(
  "box-content grid place-items-center rounded-full bg-white shadow-[inset_0px_1.5px_0px_1px_#dadada]",
  {
    variants: {
      size: {
        md: "h-8 w-8 p-2.5 sm:h-12 sm:w-12",
        lg: "h-16 w-16 p-2.5 sm:h-28 sm:w-28",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const iconVariants = cva("", {
  variants: {
    variant: {
      rock: RockIcon,
      paper: PaperIcon,
      scissors: ScissorsIcon,
      lizard: LizardIcon,
      spock: SpockIcon,
    },
  },
});

export type GameItemProps = HTMLAttributes<HTMLDivElement> & {
  type: SelectionState;
} & VariantProps<typeof containerVariants>;

export default function GameItem({ type, size, className, ...props }: GameItemProps) {
  return (
    <div className={cn(borderVariants({ variant: type, size }))} {...props}>
      <div className={containerVariants({ size, className })}>
        <img
          data-variant={type}
          src={iconVariants({ variant: type })}
          alt={`${type}-icon`}
          className="w-4/6 data-[variant=lizard]:w-5/6"
        />
      </div>
    </div>
  );
}
