import { cn } from "@/lib/utils";


export function Shell({ children, className }) {
  return (
    <div
      className={cn(
        "w-full rounded-lg border border-border px-3 py-4 backdrop-blur-[2px] md:p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
