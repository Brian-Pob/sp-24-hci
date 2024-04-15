import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useParams } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/events/$eventId")({
  loader: async ({ params }) => {
    const event = await fetchEventById(params.eventId);
    return { event };
  },
  component: EventPage,
});

function checkIfRegistered(eventParams) {
  const emailString = localStorage.getItem("currentUser");
  const key = emailString + "/" + String(eventParams.eventId);
  if (localStorage.getItem(key) !== null) return true;
  else return false;
}

function EventPage() {
  //what function do i use to check i
  const eventParams = useParams({ from: "/events/$eventId" });
  const { event } = Route.useLoaderData();
  const [isRegistered, setIsRegistered] = useState(
    checkIfRegistered(eventParams)
  );
  function registrationHandler(isRegistered) {
    setIsRegistered(!isRegistered);
    //if i can get the email then registering events becomes quite trivial
    const timestamp = new Date();
    const emailString = localStorage.getItem("currentUser");
    const key = emailString + "/" + String(eventParams.eventId);
    if (isRegistered === false) {
      console.log(eventParams.eventId);
      localStorage.setItem(key, JSON.stringify(eventParams.eventId));
      console.log(localStorage.getItem(key));
    } else {
      if (localStorage.getItem(key) !== null) localStorage.removeItem(key);
    }
  }
  return (
    <div className="overflow-y-scroll min-w-[min(var(--container-2xl),100%)] ">
      <div className="p-4 flex flex-col gap-4">
        <h1 className="font-medium text-4xl">{event.title}</h1>

        <img
          src={event.image}
          alt=""
          width={300}
          height={175}
          className="object-cover w-full rounded-md shadow-lg"
        />
        <span className="text-center w-fit mx-auto -mt-3 font-semibold">
          {isRegistered ? "Registered" : "Not Registered"}
        </span>
        <div className="grid grid-flow-col items-center">
          <Button
            className="w-full border-slate-600"
            variant={!isRegistered ? "default" : "outline"}
            onClick={() => registrationHandler(isRegistered)}
          >
            Click to {isRegistered ? "Unregister " : "Register "}
          </Button>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <p className="w-fit">Tags:</p>
          <ul className="flex flex-row flex-wrap gap-2">
            {event.tags.map((tag) => (
              <li
                key={tag}
                className="py-1 px-2 bg-zinc-200 rounded-md text-xs font-medium"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div>
            <div className="flex flex-row gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
              {formatDate(event.date)}
            </div>
            <div className="flex flex-row gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              {formatTime(event.startTime)}{" "}
              {event.endTime && ` - ${formatTime(event.endTime)}`}
            </div>
          </div>
          <div className="flex flex-row gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              {event.location}
          </div>
        </div>
        <p className="max-h-[175px] overflow-y-scroll">{event.description}</p>
      </div>
    </div>
  );
}

async function fetchEventById(eventId) {
  const response = await fetch("/api/events.json").then((res) => res.json());
  return response.find((event) => event.id === eventId);
}

function formatTime(timeString) {
  if (!timeString) return ""; // Return empty string if no time is provided
  const time = timeString.match(/(\d+):(\d+)/);
  if (!time) return timeString; // Return the original string if it doesn't match the expected format

  let hours = parseInt(time[1], 10);
  const minutes = time[2];
  const suffix = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // '0' hours converts to '12'

  return `${hours}:${minutes} ${suffix}`;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long", // full name of the month
    day: "numeric", // numeric day of the month
    year: "numeric", // numeric year
  });
}
