import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-blueprint text-white",
        secondary: "border-transparent bg-paper text-pen",
        outline: "border-hairline bg-white text-pen",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  }
);

const Badge = ({ className, variant, ...props }) => {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
};

export { Badge, badgeVariants };
