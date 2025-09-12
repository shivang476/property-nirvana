import { cva, VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "rounded-full text-white font-semibold transition-colors duration-300",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 hover:bg-blue-700",
        secondary: "bg-gray-600 hover:bg-gray-700",
        outline: "border border-gray-600 text-gray-600 hover:bg-gray-100",
      },
      size: {
        small: "px-4 py-2 text-sm",
        medium: "px-6 py-3 text-base",
        large: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  },
);

import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;
const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
};

Button.displayName = "Button";
export default Button;
