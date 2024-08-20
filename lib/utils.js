import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { addDays, format } from "date-fns";

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatDate(date) {
  return format(date, "LLL dd, y");
}