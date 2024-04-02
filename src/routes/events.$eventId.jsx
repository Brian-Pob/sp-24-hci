import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Route = createFileRoute("/events/$eventId")({
	loader: async ({ params }) => {
		const event = await fetchEventById(params.eventId);
		return { event };
	},
	component: EventPage,
});

function EventPage() {
	const { event } = Route.useLoaderData();
	const [isRegistered, setIsRegistered] = useState(false);
	return (
		<div className=" overflow-y-scroll">
			<div className="max-w-3xl p-4 flex flex-col gap-4">
				<h1 className="font-medium text-4xl">{event.title}</h1>

				<img
					src={event.image}
					alt=""
					width={300}
					height={175}
					className="object-cover w-full rounded-md"
				/>
				<span className="text-center w-fit mx-auto -mt-3">
					{isRegistered ? "Registered" : "Not Registered"}
				</span>
				<div className="grid grid-flow-col items-center">
					<Button
						className="w-full border-slate-600"
						variant={!isRegistered ? "default" : "outline"}
						onClick={() => setIsRegistered(!isRegistered)}
					>
						Click to {isRegistered ? "Unregister " : "Register "}
					</Button>
				</div>
				<ul className="flex flex-row flex-wrap gap-2">
					Tags:
					{event.tags.map((tag) => (
						<li
							key={tag}
							className="py-1 px-2 bg-zinc-200 rounded-md text-xs font-medium"
						>
							{tag}
						</li>
					))}
				</ul>
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
