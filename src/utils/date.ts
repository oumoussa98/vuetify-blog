export function formatDate(date: Date | string): string {
  if (typeof date === "string") date = new Date(date);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
