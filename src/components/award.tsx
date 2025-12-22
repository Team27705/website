import { cn } from "~/lib/utils";
import AwardBanner from "@/public/award-banner.svg";

export function Award({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("relative flex justify-center", className)}>
      <AwardBanner className="h-64 w-auto text-blue-400" />
      <div className="absolute inset-0 mt-6 mb-12 flex flex-col items-center justify-center gap-4">
        {children}
      </div>
    </div>
  );
}

export function AwardEventLogo({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "-mb-2 w-[80%] text-center text-lg leading-tight font-semibold text-white",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function AwardEventName({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "max-w-[85%] text-center text-lg leading-tight font-semibold text-white",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function AwardTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "my-auto max-w-[85%] text-center text-xl leading-tight font-bold text-yellow-400",
        className,
      )}
    >
      {children}
    </h2>
  );
}
