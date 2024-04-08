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
	if (localStorage.getItem(key) !== null)
		return true;
	else
		return false;
}

function EventPage() {
	//what function do i use to check i
	const eventParams = useParams({ from: '/events/$eventId' });
	const { event } = Route.useLoaderData();
	const [isRegistered, setIsRegistered] = useState(checkIfRegistered(eventParams));
	function registrationHandler(isRegistered)
	{
		setIsRegistered(!isRegistered);
			//if i can get the email then registering events becomes quite trivial
		const timestamp = new Date();
		const emailString = localStorage.getItem("currentUser");
		const key = emailString + "/" + String(eventParams.eventId);
		if (isRegistered === false)
		{
			console.log(eventParams.eventId);
			localStorage.setItem(key, JSON.stringify(eventParams.eventId));
			console.log(localStorage.getItem(key));
		}
		else
		{
			if (localStorage.getItem(key) !== null)
				localStorage.removeItem(key);
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
						<span>{event.date}</span>
						<span>
							{event.startTime} {event.endTime && ` - ${event.endTime}`}
						</span>
					</div>
					<div>
						<span>{event.location}</span>
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
