export function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
}
