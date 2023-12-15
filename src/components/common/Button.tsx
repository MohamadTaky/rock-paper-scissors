import cn from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "text-center rounded-md active:scale-[98%] transition-transform outline-offset-4 outline-white focus:outline-dashed focus:outline-2",
  {
    variants: {
      variant: {
        primary: "bg-slate-50 hover:bg-slate-100 active:bg-slate-200 text-dark shadow-md",
        ghost: "",
        outline:
          "mt-auto block self-center rounded-md !border-2 border-[hsl(217,16%,45%)] text-2xl tracking-widest sm:self-end",
      },
      size: {
        md: "px-4 py-2",
        lg: "px-8 py-1",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ asChild, variant, size, className, ...props }, ref) =>
  asChild ? (
    <Slot ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
  ) : (
    <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
  ),
);
export default Button;
