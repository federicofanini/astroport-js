import { Icons } from "@/components/ui/icons";
import { cn, formatDate } from "@/lib/utils";

export function TimelineContainer({ children }) {
  return (
    // first:md:order-2 does not work
    <div className="mx-auto flex max-w-md flex-col justify-center gap-3 md:order-2 mb-10">
      {children}
    </div>
  );
}

export function TimelineEvent({
  label,
  date,
  message,
  icon,
  isLast = false,
}) {
  const Icon = Icons[icon.name];
  return (
    <div className="group -m-2 relative flex gap-4 border border-transparent p-2">
      <div className="relative">
        <div
          className={cn(
            "rounded-full border bg-background p-2",
            icon.borderColor,
          )}
        >
          <Icon className={cn("h-4 w-4", icon.textColor)} />
        </div>
        {!isLast ? (
          <div className="absolute inset-x-0 mx-auto h-full w-[2px] bg-muted" />
        ) : null}
      </div>
      <div className="mt-1 flex flex-1 flex-col gap-1">
        <div className="flex items-center justify-between gap-4">
          <p className="font-semibold text-sm">{label}</p>
          <p className="mt-px text-right text-[10px] text-muted-foreground">
            <code>{formatDate(new Date(date), "LLL dd, y HH:mm:ss")}</code>
          </p>
        </div>
        <p className="text-muted-foreground text-sm">{message}</p>
      </div>
    </div>
  );
}

export function Timeline() {
  return (
    <TimelineContainer>
      {timeline.map((event, i) => (
        <TimelineEvent
          key={event.message}
          isLast={i === timeline.length - 1}
          {...event}
        />
      ))}
    </TimelineContainer>
  );
}

const timeline = [
  {
    label: "Get the idea",
    date: new Date("03.12.2024, 19:14:45"),
    message: "Identify a unique app concept that solves a problem or meets a specific need.",
    icon: {
      name: "alert-triangle",
      textColor: "text-orange-500",
      borderColor: "border-orange-500/40",
    },
  },
  {
    label: "Plan the app design",
    date: new Date("03.12.2024, 19:14:55"),
    message: "Sketch out the user interface and user experience, ensuring a clean, intuitive design.",
    icon: {
      name: "camera",
      textColor: "text-amber-500",
      borderColor: "border-amber-500/40",
    },
  },
  {
    label: "Develop & Deploy",
    date: new Date("03.15.2024, 19:15:01"),
    message: "Build your app with the right tools, then deploy it.",
    icon: {
      name: "sparkles",
      textColor: "text-blue-500",
      borderColor: "border-blue-500/40",
    },
  },
  {
    label: "Monetize",
    date: new Date("03.20.2024, 19:21:30"),
    message: "Implement strategies to generate revenue, launch and go viral.",
    icon: {
      name: "check",
      textColor: "text-green-500",
      borderColor: "border-green-500/40",
    },
  },
];
