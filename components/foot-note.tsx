import { cn } from "@/lib/utils";

export default function FootNote({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("mb-8", className)}>{children}</div>;
}

function FootNoteTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "text-xl md:text-2xl font-platypi font-semibold",
        className,
      )}
    >
      {children}
    </h3>
  );
}

function FootNoteContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("text-zinc-800 mt-2", className)}>{children}</p>;
}

FootNote.Title = FootNoteTitle;
FootNote.Content = FootNoteContent;
