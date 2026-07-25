import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueprint focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blueprint text-white shadow-sm hover:bg-blueprint-deep",
        outline: "border border-hairline bg-white text-ink shadow-sm hover:bg-paper",
        "outline-dark":
          "border border-white/25 bg-transparent text-white hover:border-white/60 hover:bg-white/5",
        ghost: "hover:bg-paper",
      },
      size: {
        default: "h-10 px-5",
        sm: "h-9 px-4",
        lg: "h-11 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = ({ className, variant, size, href, ...props }) => {
  if (href) {
    return <a href={href} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
  }
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
};

export { Button, buttonVariants };
