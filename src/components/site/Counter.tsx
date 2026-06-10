export function Counter({ to, suffix = "" }: { to: number | string; suffix?: string; duration?: number }) {
  const display = typeof to === "number" ? to.toLocaleString() : String(to);
  return <span>{display}{suffix}</span>;
}
