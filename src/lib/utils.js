import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export function formatTime(timeString) {
  if (!timeString) return ""; // Return empty string if no time is provided
  const time = timeString.match(/(\d+):(\d+)/);
  if (!time) return timeString; // Return the original string if it doesn't match the expected format

  let hours = Number.parseInt(time[1], 10);
  const minutes = time[2];
  const suffix = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // '0' hours converts to '12'

  return `${hours}:${minutes} ${suffix}`;
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long", // full name of the month
    day: "numeric", // numeric day of the month
    year: "numeric", // numeric year
  });
}