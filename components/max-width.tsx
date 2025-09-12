import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type Props = ComponentProps<"div">;
export default function MaxWidthWrapper({ className, ...props }: Props) {
  return <div {...props} className={cn("max-w-7xl mx-auto", className)} />;
}
